# [程式風格指引 (Style Guide)](@id man-style-guide)

接下來的章節會解釋一些Julia程式風格中慣用語的一些面向。沒有任何一條規則是絕對的；他們只是一些建議，協助你自己熟悉這個語言，也協助你挑選設計的替代方案。

## 撰寫函式，而不只是腳本（scripts）

一步一步的撰寫top level code是開始解決問題一個快速的方法，但你應該嘗試盡力將程式拆解成很多的函式。函式可以更好的被重新利用與測試，他可以釐清哪些步驟已經被執行，而他們的輸入與輸出是什麼。再者，在函式中的程式碼傾向跑的比top level code快，這取決於Julia編譯器如何運作。

要再一次強調，函式應該要採用參數裡的值，而不是直接操作全域變數（除了常數以外，像[`pi`](@ref)）。

## 避免撰寫過度專一的型別

程式碼應該愈泛用愈好。而不是撰寫：

```julia
convert(Complex{Float64}, x)
```

比較好的作法是使用泛用函式：

```julia
complex(float(x))
```

第二個版本會將`x`轉成適當的型別，並非一直是同一種型別。

這則指引是特別關於函式參數。例如，若是他可以是任意整數，請勿宣告參數型別為`Int`或`Int32`，使用抽象型別`Integer`更為恰當。事實上，很多時候你可以省略所有的參數型別，除非需要區分不同方法的定義，如果傳遞的型別不支援方法中任何必要的操作，自然會拋出[`MethodError`](@ref)。（這被稱為鴨子定型 [duck typing](https://en.wikipedia.org/wiki/Duck_typing)）。

舉例，考慮以下函式定義，`addone`會回傳參數值加一：

```julia
addone(x::Int) = x + 1                 # works only for Int
addone(x::Integer) = x + one(x)    # any integer type
addone(x::Number) = x + one(x)     # any numeric type
addone(x) = x + one(x)             # any type supporting + and oneunit
```

最後的`addone`定義會被[`one`](@ref)（`one`會回傳跟`x`型別相同的1，這樣可以避免無謂的向上轉型）以及[`+`](@ref)函式處理，他們支援任意的參數型別。重要的是，要理解如果*只定義*廣義的`addone(x) = x + one(x)`是*沒有效能懲罰*的，因為Julia會根據需求自動編譯特定的版本。舉例像是，當你第一次呼叫`addone(12)`時，Julia會自動編譯一個特別給`x::Int`參數的`addone`函式，呼叫中的`one`會被取代為他的值`1`。因此，當有第四個定義時，前三個`addone`定義是完全的冗餘。

## 呼叫方處理超出範圍的參數

不要寫：

```julia
function foo(x, y)
    x = Int(x); y = Int(y)
    ...
end
foo(x, y)
```

請使用：

```julia
function foo(x::Int, y::Int)
    ...
end
foo(Int(x), Int(y))
```

這是較好的風格，`foo`並不是真的接受所有的數字型別；他只接受`Int`。

這邊有個議題是，一個函式天生就需要整數，可能強制呼叫方決定非整數值該如何被轉換，會是比較好的作法（e.g. floor或是ceiling）。另一個議題是，宣告更特定的型別可以為以後方法的定義上留下更多空間。

## 如果函式會修改到參數的值，在函式名稱之後加上`!`

不要寫：

```julia
function double(a::AbstractArray{<:Number})
    for i = 1:endof(a)
        a[i] *= 2
    end
    return a
end
```

請使用：

```julia
function double!(a::AbstractArray{<:Number})
    for i = 1:endof(a)
        a[i] *= 2
    end
    return a
end
```

Julia標準程式庫普遍使用這樣的慣例，標準程式庫中也包含了拷貝形式跟修改形式的函式範例(e.g., [`sort()`](@ref)與[`sort!()`](@ref))，還有一些只有修改形式(e.g., [`push!()`](@ref), [`pop!()`](@ref), [`splice!()`](@ref))。為了方便，這樣的函式回傳修改過的陣列，也是很典型的例子。

## 避免不可思議的`Union`型別

像是`Union{Function,AbstractString}`的型別常常意味著一些設計上可以更單純。

## 避免在field中使用`Union`型別

當創造一個型別時：

```julia
mutable struct MyType
    ...
    x::Union{Void,T}
end
```

詢問`x`是不是`nothing`（其型別是`Void`）是非常重要的。這裡有些其他的事項需要考慮：

  * 尋求一個安全的預設值來初始化`x`
  * 引進另一個不需要`x`的型別
  * 如果有很多跟`x`相似的field，將他們存在一個字典中
  * 決定一個簡單的規則來確認`x`是不是`nothing`。舉例來說，通常一個field一開始會是`nothing` 但會在一個明確的地方做初始化。在那個例子中，是讓他一開始維持未定義。
  * 如果一個`x`真的需要在某些時候不被賦值，定義他為`::Nullable{T}`，當程式存取這個field時，符合了型別穩定性（見[Nullable types](@ref man-nullable-types)）。

## 避免詳盡描述容器型別

像以下方式建構一個陣列通常沒多大的幫助：

```julia
a = Array{Union{Int,AbstractString,Tuple,Array}}(n)
```

在這個例子中，`Array{Any}(n)`是更好的。標註特定的使用範圍是對編譯器更有幫助的（e.g. `a[i]::Int`），比起試圖打包多種替代型別到一個型別中。

## 使用與Julia`base/`一致的命名慣例

  * 模組跟型別命名開頭大寫，並使用駝峰式命名法： `module SparseArrays`, `struct UnitRange`.
  * 函式開頭小寫 ([`maximum()`](@ref), [`convert()`](@ref))，當不影響可讀性時，多個字連接在一起 ([`isequal()`](@ref), [`haskey()`](@ref))。 必要時，使用底線將字分開。 底線也用來暗示兩個概念的結合 ([`remotecall_fetch()`](@ref) 為`fetch(remotecall(...))`更加簡便的實作) 或是作為修飾 ([`sum_kbn()`](@ref))。
  * 簡潔是有價值的，但請避免縮寫（使用[`indexin()`](@ref)比`indxin()`好），當一個字變得難以記憶是否或是如何被縮寫。

如果一個函式需要多個字，考慮他可能代表多於一個概念，可能將他拆成多個片段比較好。

## 不要過度使用try-catch

避免error比起依賴捕捉他們來的好。

## 別將條件式括弧起來

Julia不需要在`if`與`while`中將條件括弧起來。請寫：

```julia
if a == b
```

而不是：

```julia
if (a == b)
```

## 不要過度使用`...`

切割函式參數可能會上癮。不要使用`[a..., b...]`，而是使用簡單的`[a; b]`，他會串接陣列。[`collect(a)`](@ref)比`[a...]`更好，但如果`a`已經是iterable，常常更好的選擇會是不要理他，而不必要把他轉換成陣列。

## 不要使用不必要的靜態參數

函式簽名：

```julia
foo(x::T) where {T<:Real} = ...
```

應該寫成：

```julia
foo(x::Real) = ...
```

特別是，如果`T`在函式內部沒有使用到。即使`T`有被使用到，方便的話，可以被取代為[`typeof(x)`](@ref)。他在效能上是沒有差別的。要注意的是，這不是對一般靜態參數的警示，只是他們被用在不需要的地方。

還有一點值得注意，容器型別可能特別需要函式中的參數型別。可以看FAQ [避免Avoid fields with abstract containers](@ref)以取得更多資訊。

## 避免混淆實例與型別

像以下一系列的定義可能會使人困惑：

```julia
foo(::Type{MyType}) = ...
foo(::MyType) = foo(MyType)
```

Decide whether the concept in question will be written as `MyType` or `MyType()`, and stick to
it.

The preferred style is to use instances by default, and only add methods involving `Type{MyType}`
later if they become necessary to solve some problem.

If a type is effectively an enumeration, it should be defined as a single (ideally immutable struct or primitive)
type, with the enumeration values being instances of it. Constructors and conversions can check
whether values are valid. This design is preferred over making the enumeration an abstract type,
with the "values" as subtypes.

## 不要過度使用macros

Be aware of when a macro could really be a function instead.

Calling [`eval()`](@ref) inside a macro is a particularly dangerous warning sign; it means the
macro will only work when called at the top level. If such a macro is written as a function instead,
it will naturally have access to the run-time values it needs.

## 不要在介面上暴露不安全的操作

If you have a type that uses a native pointer:

```julia
mutable struct NativeType
    p::Ptr{UInt8}
    ...
end
```

don't write definitions like the following:

```julia
getindex(x::NativeType, i) = unsafe_load(x.p, i)
```

The problem is that users of this type can write `x[i]` without realizing that the operation is
unsafe, and then be susceptible to memory bugs.

Such a function should either check the operation to ensure it is safe, or have `unsafe` somewhere
in its name to alert callers.

## 不要重載基本容器型別的方法

撰寫以下定義是可能的：

```julia
show(io::IO, v::Vector{MyType}) = ...
```

這會提供向量承載的特定新型別一個客製化呈現。這固然吸引人，卻是需要避免的。這會造成麻煩，使用者會期待一個已知的型別，像`Vector()`，做出特定的行為，過度的客製化它的行為會導致它更難以運作。

## 避免type piracy

"Type piracy"指的是實際延伸或是重新定義Base或是其他套件中的方法到你尚未定義的型別上。某些狀況下，你可以免除type piracy，只有少數不良效應。然而，在極端的狀況，你甚至會使Julia崩潰(e.g. 如果你的延伸或是重新定義導致無法輸入並傳給`ccall`)。 Type piracy會使程式碼的推論惡化（reasoning about code），也可能引進不相容，這些是難以預測跟診斷的。

舉例，假設模組中你想要在symbols上定義乘法：

```julia
module A
import Base.*
*(x::Symbol, y::Symbol) = Symbol(x,y)
end
```

The problem is that now any other module that uses `Base.*` will also see this definition.
Since `Symbol` is defined in Base and is used by other modules, this can change the
behavior of unrelated code unexpectedly. There are several alternatives here, including
using a different function name, or wrapping the `Symbol`s in another type that you define.

Sometimes, coupled packages may engage in type piracy to separate features from definitions,
especially when the packages were designed by collaborating authors, and when the
definitions are reusable. For example, one package might provide some types useful for
working with colors; another package could define methods for those types that enable
conversions between color spaces. Another example might be a package that acts as a thin
wrapper for some C code, which another package might then pirate to implement a
higher-level, Julia-friendly API.

## 要小心型別的等價性

大家一般喜歡用[`isa()`](@ref)跟`<:` ([`issubtype()`](@ref))來測試型別，而非`==`。檢查型別的等價性一般只有跟已知的具體型別比較是對的。(e.g. `T == Float64`)，或是你*真的真的*知道你自己在做什麼。

## 不要寫`x->f(x)`

由於高階函式常常呼叫匿名函式，這幾乎是必要的。不過任何函式都可以不用包裝成匿名函式直接作為參數傳送。不要寫`map(x->f(x), a)`，請使用[`map(f, a)`](@ref).

## Avoid using floats for numeric literals in generic code when possible

If you write generic code which handles numbers, and which can be expected to run with many different
numeric type arguments, try using literals of a numeric type that will affect the arguments as
little as possible through promotion.

For example,

```jldoctest
julia> f(x) = 2.0 * x
f (generic function with 1 method)

julia> f(1//2)
1.0

julia> f(1/2)
1.0

julia> f(1)
2.0
```

while

```jldoctest
julia> g(x) = 2 * x
g (generic function with 1 method)

julia> g(1//2)
1//1

julia> g(1/2)
1.0

julia> g(1)
2
```

As you can see, the second version, where we used an `Int` literal, preserved the type of the
input argument, while the first didn't. This is because e.g. `promote_type(Int, Float64) == Float64`,
and promotion happens with the multiplication. Similarly, `Rational` literals are less type disruptive
than [`Float64`](@ref) literals, but more disruptive than `Int`s:

```jldoctest
julia> h(x) = 2//1 * x
h (generic function with 1 method)

julia> h(1//2)
1//1

julia> h(1/2)
1.0

julia> h(1)
2//1
```

Thus, use `Int` literals when possible, with `Rational{Int}` for literal non-integer numbers,
in order to make it easier to use your code.


