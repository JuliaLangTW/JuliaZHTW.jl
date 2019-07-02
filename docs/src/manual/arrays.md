# [多維陣列 (Multi-dimensional Arrays) ](@id man-multi-dim-arrays)

Julia，就像許多現代的程式語言，提供一流的陣列實作。
許多程式語言花了不少功夫以犧牲其他容器（container）為代價來實作陣列。
但 Julia 卻不這樣做。Julia 本身內建完整的陣列函式庫，且擁有編譯器等級的效能
，就像任何用 Julia 寫的程式一樣。
因此，可以利用 [`AbstractArray`](@ref) 來自製客製化陣列型別。
查看 [`AbstractArray interface使用手冊`](@ref man-interface-array) 來獲得實作客製化陣列型別的詳細說明。

陣列是一個由許多物件組成並且儲存在一個多維框架 (multi-dimensional grid) 的集合。在一般使用上，
一個陣列可能存在 [`Any`](@ref)物件。 對於大多數的計算需求，陣列必須指定
更詳細的物件型別，像是 [`Float64`](@ref) 或 [`Int32`](@ref)。

一般來說，不像其他的程式語言，Julia 並沒有預設程式以向量風格（vectorized style）來撰寫。在純量陣列索引（scalar array indexing）方面，Julia 的編譯器使用型別推論（type inference）產生最佳化程式碼，藉此來允許程式碼能夠撰寫的更加方便及更可讀也可以避免犧牲效能和使用較少記憶體。

在 Julia 中，所有參數傳遞給函式的方式皆為 [pass by sharing](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing)
（也就是，透過指標）。一些程式語言使用傳值來傳遞陣列，即便這些防止對於原陣列的意外修改 
卻難以避免不必要的陣列複製。依照慣例，一個函式名稱結尾為 ! 代表它將會修改或刪除它的一或多個參數的值 (舉例來說，[`sort`](@ref) 和 [`sort!`](@ref)。
被呼叫方（Callees）必須明確地複製來確保不會對輸入做出非預期的修改。
許多的無修改函數（non-mutating function）的實作是，透過呼叫一個後綴 ! 的同名函數，明確地複製輸入的值，並回傳這份複製的值。

## 基本函式

| 函式               | 說明                                                                      |
|:---------------------- |:-------------------------------------------------------------------------------- |
| [`eltype(A)`](@ref)    | `A` 裡面的元素型別                                        |
| [`length(A)`](@ref)    | 陣列 `A` 中的元素數量                                                    |
| [`ndims(A)`](@ref)     | 陣列 `A` 的維度大小                                                  |
| [`size(A)`](@ref)      | 一個元祖（tuple）包含了`A`的維度                                         |
| [`size(A,n)`](@ref)    | 沿著維度 `n` 的 `A` 陣列大小                                               |
| [`axes(A)`](@ref)      | 一個數組（tuple）包含 `A` 的有效索引                                      |
| [`axes(A,n)`](@ref)    | 表示沿著維度 `n` 的有效索引的範圍                          |
| [`eachindex(A)`](@ref) | 一個用於存取 `A` 每個位置的高效率迭代器（iterator）                           |
| [`stride(A,k)`](@ref)  | 沿著維度 `k` 的步長（stride，鄰近的元素之間的索引距離）  |
| [`strides(A)`](@ref)   | 一個元祖（tuple）包含所有維度的步長（stride）                                          |

## 建構與初始化

目前提供許多建構與初始化的函式。 例如：
呼叫為 `dims...` 變數可以為包含維度大小的單獨元祖亦或是
一系列維度大小作為可變數量的參數傳遞。這些函數大多數 
都接受第一個輸入為 `T`，此為一元素型別的陣列。如果省略型別 `T`，則預設型別為 [`Float64`](@ref)。

| 函式                           | 說明                                                                                                                                                                                                                                  |
|:---------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Array{T}(undef, dims...)`](@ref)             | 一個尚未初始化的密集陣列 [`Array`](@ref)                                                                                                                                                                                                              |
| [`zeros(T, dims...)`](@ref)                    | 值全為 0 的陣列                                                                                                                                                                                                                       |
| [`ones(T, dims...)`](@ref)                     | 值全為 1 的陣列                                                                                                                                                                                                                       |
| [`trues(dims...)`](@ref)                       | 值全為 `true` 的 [`BitArray`](@ref)                                                                                                                                                                                                    |
| [`falses(dims...)`](@ref)                      | 值全為 `false` 的 `BitArray`                                                                                                                                                                                                          |
| [`reshape(A, dims...)`](@ref)                  | 一個陣列包含與 `A` 相同的資料，但不同的維度                                                                                                                                                                      |
| [`copy(A)`](@ref)                              | 複製 `A`                                                                                                                                                                                                                                     |
| [`deepcopy(A)`](@ref)                          | 複製 `A`，並遞迴複製其元素                                                                                                                                                                                                   |
| [`similar(A, T, dims...)`](@ref)               | 與 `A` 有相同的型別（密集（dense），稀疏（sparse）等）的一個非初始化的陣列，但有著特定元素型別與維度。第二與第三變數為選用，預設值為與 `A` 相同的元素型別與維度。 |
| [`reinterpret(T, A)`](@ref)                    | 一個陣列與 `A` 有相同的資料，但有著元素型別 `T`                                                                                                                                                                         |
| [`rand(T, dims...)`](@ref)                     | 一個隨機 `陣列Array`，在半開放區間``[0, 1)``有iid [^1] 和均勻分散的數值                                                                                                                                        |
| [`randn(T, dims...)`](@ref)                    | 一個隨機 `陣列Array`，iid 和標準一般分散數值                                                                                                                                                                         |
| [`Matrix{T}(I, m, n)`](@ref)                   | `m`-by-`n` 單位矩陣                                                                                                                                                                                                                   |
| [`range(start, stop=stop, length=n)`](@ref)    | 一個範圍 `n` 的線性間隔的元素，從 `start` 到 `stop`                                                                                                                                                                                 |
| [`fill!(A, x)`](@ref)                          | 陣列 `A` 以數值 `x` 填滿                                                                                                                                                                                                        |
| [`fill(x, dims...)`](@ref)                     | 一個 `陣列Array` 以數值 `x` 填滿                                                                                                                                                                                                         |

[^1]: *iid*, 獨立且相同的分佈。

The syntax `[A, B, C, ...]` constructs a 1-d array(i.e., a vector) of its arguments. If all
arguments have a common [promotion type](@ref conversion-and-promotion) then they get
converted to that type using [`convert`](@ref).
To see the various ways we can pass dimensions to these constructors, consider the following examples:
```jldoctest
julia> zeros(Int8, 2, 3)
2×3 Array{Int8,2}:
 0  0  0
 0  0  0

julia> zeros(Int8, (2, 3))
2×3 Array{Int8,2}:
 0  0  0
 0  0  0

julia> zeros((2, 3))
2×3 Array{Float64,2}:
 0.0  0.0  0.0
 0.0  0.0  0.0
```
Here, `(2, 3)` is a [`Tuple`](@ref).

## Concatenation

Arrays can be constructed and also concatenated using the following functions:

| Function                    | Description                                     |
|:--------------------------- |:----------------------------------------------- |
| [`cat(A...; dims=k)`](@ref) | concatenate input arrays along dimension(s) `k` |
| [`vcat(A...)`](@ref)        | shorthand for `cat(A...; dims=1)`               |
| [`hcat(A...)`](@ref)        | shorthand for `cat(A...; dims=2)`               |

Scalar values passed to these functions are treated as 1-element arrays. For example,
```jldoctest
julia> vcat([1, 2], 3)
3-element Array{Int64,1}:
 1
 2
 3

julia> hcat([1 2], 3)
1×3 Array{Int64,2}:
 1  2  3
```

The concatenation functions are used so often that they have special syntax:

| Expression        | Calls             |
|:----------------- |:----------------- |
| `[A; B; C; ...]`  | [`vcat`](@ref)  |
| `[A B C ...]`     | [`hcat`](@ref)  |
| `[A B; C D; ...]` | [`hvcat`](@ref) |

[`hvcat`](@ref) concatenates in both dimension 1 (with semicolons) and dimension 2 (with spaces).
Consider these examples of this syntax:
```jldoctest
julia> [[1; 2]; [3, 4]]
4-element Array{Int64,1}:
 1
 2
 3
 4

julia> [[1 2] [3 4]]
1×4 Array{Int64,2}:
 1  2  3  4

julia> [[1 2]; [3 4]]
2×2 Array{Int64,2}:
 1  2
 3  4
```

## Typed array initializers

An array with a specific element type can be constructed using the syntax `T[A, B, C, ...]`. This
will construct a 1-d array with element type `T`, initialized to contain elements `A`, `B`, `C`,
etc. For example, `Any[x, y, z]` constructs a heterogeneous array that can contain any values.

Concatenation syntax can similarly be prefixed with a type to specify the element type of the
result.

```jldoctest
julia> [[1 2] [3 4]]
1×4 Array{Int64,2}:
 1  2  3  4

julia> Int8[[1 2] [3 4]]
1×4 Array{Int8,2}:
 1  2  3  4
```

## Comprehensions

Comprehensions provide a general and powerful way to construct arrays. Comprehension syntax is
similar to set construction notation in mathematics:

```
A = [ F(x,y,...) for x=rx, y=ry, ... ]
```

The meaning of this form is that `F(x,y,...)` is evaluated with the variables `x`, `y`, etc. taking
on each value in their given list of values. Values can be specified as any iterable object, but
will commonly be ranges like `1:n` or `2:(n-1)`, or explicit arrays of values like `[1.2, 3.4, 5.7]`.
The result is an N-d dense array with dimensions that are the concatenation of the dimensions
of the variable ranges `rx`, `ry`, etc. and each `F(x,y,...)` evaluation returns a scalar.

The following example computes a weighted average of the current element and its left and right
neighbor along a 1-d grid. :

```julia-repl
julia> x = rand(8)
8-element Array{Float64,1}:
 0.843025
 0.869052
 0.365105
 0.699456
 0.977653
 0.994953
 0.41084
 0.809411

julia> [ 0.25*x[i-1] + 0.5*x[i] + 0.25*x[i+1] for i=2:length(x)-1 ]
6-element Array{Float64,1}:
 0.736559
 0.57468
 0.685417
 0.912429
 0.8446
 0.656511
```

The resulting array type depends on the types of the computed elements. In order to control the
type explicitly, a type can be prepended to the comprehension. For example, we could have requested
the result in single precision by writing:

```julia
Float32[ 0.25*x[i-1] + 0.5*x[i] + 0.25*x[i+1] for i=2:length(x)-1 ]
```

## Generator Expressions

Comprehensions can also be written without the enclosing square brackets, producing an object
known as a generator. This object can be iterated to produce values on demand, instead of allocating
an array and storing them in advance (see [Iteration](@ref)). For example, the following expression
sums a series without allocating memory:

```jldoctest
julia> sum(1/n^2 for n=1:1000)
1.6439345666815615
```

When writing a generator expression with multiple dimensions inside an argument list, parentheses
are needed to separate the generator from subsequent arguments:

```julia-repl
julia> map(tuple, 1/(i+j) for i=1:2, j=1:2, [1:4;])
ERROR: syntax: invalid iteration specification
```

All comma-separated expressions after `for` are interpreted as ranges. Adding parentheses lets
us add a third argument to [`map`](@ref):

```jldoctest
julia> map(tuple, (1/(i+j) for i=1:2, j=1:2), [1 3; 2 4])
2×2 Array{Tuple{Float64,Int64},2}:
 (0.5, 1)       (0.333333, 3)
 (0.333333, 2)  (0.25, 4)
```

Generators are implemented via inner functions. Just like
inner functions used elsewhere in the language, variables from the enclosing scope can be
"captured" in the inner function.  For example, `sum(p[i] - q[i] for i=1:n)`
captures the three variables `p`, `q` and `n` from the enclosing scope.
Captured variables can present performance challenges; see
[performance tips](@ref man-performance-tips).


Ranges in generators and comprehensions can depend on previous ranges by writing multiple `for`
keywords:

```jldoctest
julia> [(i,j) for i=1:3 for j=1:i]
6-element Array{Tuple{Int64,Int64},1}:
 (1, 1)
 (2, 1)
 (2, 2)
 (3, 1)
 (3, 2)
 (3, 3)
```

In such cases, the result is always 1-d.

Generated values can be filtered using the `if` keyword:

```jldoctest
julia> [(i,j) for i=1:3 for j=1:i if i+j == 4]
2-element Array{Tuple{Int64,Int64},1}:
 (2, 2)
 (3, 1)
```

## [Indexing](@id man-array-indexing)

The general syntax for indexing into an n-dimensional array `A` is:

```
X = A[I_1, I_2, ..., I_n]
```

where each `I_k` may be a scalar integer, an array of integers, or any other
[supported index](@ref man-supported-index-types). This includes
[`Colon`](@ref) (`:`) to select all indices within the entire dimension,
ranges of the form `a:c` or `a:b:c` to select contiguous or strided
subsections, and arrays of booleans to select elements at their `true` indices.

If all the indices are scalars, then the result `X` is a single element from the array `A`. Otherwise,
`X` is an array with the same number of dimensions as the sum of the dimensionalities of all the
indices.

If all indices `I_k` are vectors, for example, then the shape of `X` would be `(length(I_1), length(I_2), ..., length(I_n))`,
with location `i_1, i_2, ..., i_n` of `X` containing the value `A[I_1[i_1], I_2[i_2], ..., I_n[i_n]]`.

Example:

```jldoctest
julia> A = reshape(collect(1:16), (2, 2, 2, 2))
2×2×2×2 Array{Int64,4}:
[:, :, 1, 1] =
 1  3
 2  4

[:, :, 2, 1] =
 5  7
 6  8

[:, :, 1, 2] =
  9  11
 10  12

[:, :, 2, 2] =
 13  15
 14  16

julia> A[1, 2, 1, 1] # all scalar indices
3

julia> A[[1, 2], [1], [1, 2], [1]] # all vector indices
2×1×2×1 Array{Int64,4}:
[:, :, 1, 1] =
 1
 2

[:, :, 2, 1] =
 5
 6

julia> A[[1, 2], [1], [1, 2], 1] # a mix of index types
2×1×2 Array{Int64,3}:
[:, :, 1] =
 1
 2

[:, :, 2] =
 5
 6
```

Note how the size of the resulting array is different in the last two cases.

If `I_1` is changed to a two-dimensional matrix, then `X` becomes an `n+1`-dimensional array of
shape `(size(I_1, 1), size(I_1, 2), length(I_2), ..., length(I_n))`. The matrix adds a dimension.

Example:

```jldoctest
julia> A = reshape(collect(1:16), (2, 2, 2, 2));

julia> A[[1 2; 1 2]]
2×2 Array{Int64,2}:
 1  2
 1  2

julia> A[[1 2; 1 2], 1, 2, 1]
2×2 Array{Int64,2}:
 5  6
 5  6
```

The location `i_1, i_2, i_3, ..., i_{n+1}` contains the value at `A[I_1[i_1, i_2], I_2[i_3], ..., I_n[i_{n+1}]]`.
All dimensions indexed with scalars are dropped. For example, if `J` is an array of indices, then the result of `A[2, J, 3]` is an
array with size `size(J)`. Its `j`th element is populated by `A[2, J[j], 3]`.

As a special part of this syntax, the `end` keyword may be used to represent the last index of
each dimension within the indexing brackets, as determined by the size of the innermost array
being indexed. Indexing syntax without the `end` keyword is equivalent to a call to [`getindex`](@ref):

```
X = getindex(A, I_1, I_2, ..., I_n)
```

Example:

```jldoctest
julia> x = reshape(1:16, 4, 4)
4×4 reshape(::UnitRange{Int64}, 4, 4) with eltype Int64:
 1  5   9  13
 2  6  10  14
 3  7  11  15
 4  8  12  16

julia> x[2:3, 2:end-1]
2×2 Array{Int64,2}:
 6  10
 7  11

julia> x[1, [2 3; 4 1]]
2×2 Array{Int64,2}:
  5  9
 13  1
```

Empty ranges of the form `n:n-1` are sometimes used to indicate the inter-index location between
`n-1` and `n`. For example, the [`searchsorted`](@ref) function uses this convention to indicate
the insertion point of a value not found in a sorted array:

```jldoctest
julia> a = [1,2,5,6,7];

julia> searchsorted(a, 4)
3:2
```

## Assignment

The general syntax for assigning values in an n-dimensional array `A` is:

```
A[I_1, I_2, ..., I_n] = X
```

where each `I_k` may be a scalar integer, an array of integers, or any other
[supported index](@ref man-supported-index-types). This includes
[`Colon`](@ref) (`:`) to select all indices within the entire dimension,
ranges of the form `a:c` or `a:b:c` to select contiguous or strided
subsections, and arrays of booleans to select elements at their `true` indices.

If all indices `I_k` are integers, then the value in location `I_1, I_2, ..., I_n` of `A` is
overwritten with the value of `X`, [`convert`](@ref)ing to the
[`eltype`](@ref) of `A` if necessary.


If any index `I_k` selects more than one location, then the right hand side `X` must be an
array with the same shape as the result of indexing `A[I_1, I_2, ..., I_n]` or a vector with
the same number of elements. The value in location `I_1[i_1], I_2[i_2], ..., I_n[i_n]` of
`A` is overwritten with the value `X[I_1, I_2, ..., I_n]`, converting if necessary. The
element-wise assignment operator `.=` may be used to [broadcast](@ref Broadcasting) `X`
across the selected locations:


```
A[I_1, I_2, ..., I_n] .= X
```

Just as in [Indexing](@ref man-array-indexing), the `end` keyword may be used
to represent the last index of each dimension within the indexing brackets, as
determined by the size of the array being assigned into. Indexed assignment
syntax without the `end` keyword is equivalent to a call to
[`setindex!`](@ref):

```
setindex!(A, X, I_1, I_2, ..., I_n)
```

Example:

```jldoctest
julia> x = collect(reshape(1:9, 3, 3))
3×3 Array{Int64,2}:
 1  4  7
 2  5  8
 3  6  9

julia> x[3, 3] = -9;

julia> x[1:2, 1:2] = [-1 -4; -2 -5];

julia> x
3×3 Array{Int64,2}:
 -1  -4   7
 -2  -5   8
  3   6  -9
```

## [Supported index types](@id man-supported-index-types)

In the expression `A[I_1, I_2, ..., I_n]`, each `I_k` may be a scalar index, an
array of scalar indices, or an object that represents an array of scalar
indices and can be converted to such by [`to_indices`](@ref):

1. A scalar index. By default this includes:
    * Non-boolean integers
    * [`CartesianIndex{N}`](@ref)s, which behave like an `N`-tuple of integers spanning multiple dimensions (see below for more details)
2. An array of scalar indices. This includes:
    * Vectors and multidimensional arrays of integers
    * Empty arrays like `[]`, which select no elements
    * Ranges like `a:c` or `a:b:c`, which select contiguous or strided subsections from `a` to `c` (inclusive)
    * Any custom array of scalar indices that is a subtype of `AbstractArray`
    * Arrays of `CartesianIndex{N}` (see below for more details)
3. An object that represents an array of scalar indices and can be converted to such by [`to_indices`](@ref). By default this includes:
    * [`Colon()`](@ref) (`:`), which represents all indices within an entire dimension or across the entire array
    * Arrays of booleans, which select elements at their `true` indices (see below for more details)

Some examples:
```jldoctest
julia> A = reshape(collect(1:2:18), (3, 3))
3×3 Array{Int64,2}:
 1   7  13
 3   9  15
 5  11  17

julia> A[4]
7

julia> A[[2, 5, 8]]
3-element Array{Int64,1}:
  3
  9
 15

julia> A[[1 4; 3 8]]
2×2 Array{Int64,2}:
 1   7
 5  15

julia> A[[]]
0-element Array{Int64,1}

julia> A[1:2:5]
3-element Array{Int64,1}:
 1
 5
 9

julia> A[2, :]
3-element Array{Int64,1}:
  3
  9
 15

julia> A[:, 3]
3-element Array{Int64,1}:
 13
 15
 17
```

### Cartesian indices

The special `CartesianIndex{N}` object represents a scalar index that behaves
like an `N`-tuple of integers spanning multiple dimensions.  For example:

```jldoctest cartesianindex
julia> A = reshape(1:32, 4, 4, 2);

julia> A[3, 2, 1]
7

julia> A[CartesianIndex(3, 2, 1)] == A[3, 2, 1] == 7
true
```

Considered alone, this may seem relatively trivial; `CartesianIndex` simply
gathers multiple integers together into one object that represents a single
multidimensional index. When combined with other indexing forms and iterators
that yield `CartesianIndex`es, however, this can produce very elegant
and efficient code. See [Iteration](@ref) below, and for some more advanced
examples, see [this blog post on multidimensional algorithms and
iteration](https://julialang.org/blog/2016/02/iteration).

Arrays of `CartesianIndex{N}` are also supported. They represent a collection
of scalar indices that each span `N` dimensions, enabling a form of indexing
that is sometimes referred to as pointwise indexing. For example, it enables
accessing the diagonal elements from the first "page" of `A` from above:

```jldoctest cartesianindex
julia> page = A[:,:,1]
4×4 Array{Int64,2}:
 1  5   9  13
 2  6  10  14
 3  7  11  15
 4  8  12  16

julia> page[[CartesianIndex(1,1),
             CartesianIndex(2,2),
             CartesianIndex(3,3),
             CartesianIndex(4,4)]]
4-element Array{Int64,1}:
  1
  6
 11
 16
```

This can be expressed much more simply with [dot broadcasting](@ref man-vectorized)
and by combining it with a normal integer index (instead of extracting the
first `page` from `A` as a separate step). It can even be combined with a `:`
to extract both diagonals from the two pages at the same time:

```jldoctest cartesianindex
julia> A[CartesianIndex.(axes(A, 1), axes(A, 2)), 1]
4-element Array{Int64,1}:
  1
  6
 11
 16

julia> A[CartesianIndex.(axes(A, 1), axes(A, 2)), :]
4×2 Array{Int64,2}:
  1  17
  6  22
 11  27
 16  32
```

!!! warning

    `CartesianIndex` and arrays of `CartesianIndex` are not compatible with the
    `end` keyword to represent the last index of a dimension. Do not use `end`
    in indexing expressions that may contain either `CartesianIndex` or arrays thereof.

### Logical indexing

Often referred to as logical indexing or indexing with a logical mask, indexing
by a boolean array selects elements at the indices where its values are `true`.
Indexing by a boolean vector `B` is effectively the same as indexing by the
vector of integers that is returned by [`findall(B)`](@ref). Similarly, indexing
by a `N`-dimensional boolean array is effectively the same as indexing by the
vector of `CartesianIndex{N}`s where its values are `true`. A logical index
must be a vector of the same length as the dimension it indexes into, or it
must be the only index provided and match the size and dimensionality of the
array it indexes into. It is generally more efficient to use boolean arrays as
indices directly instead of first calling [`findall`](@ref).

```jldoctest
julia> x = reshape(1:16, 4, 4)
4×4 reshape(::UnitRange{Int64}, 4, 4) with eltype Int64:
 1  5   9  13
 2  6  10  14
 3  7  11  15
 4  8  12  16

julia> x[[false, true, true, false], :]
2×4 Array{Int64,2}:
 2  6  10  14
 3  7  11  15

julia> mask = map(ispow2, x)
4×4 Array{Bool,2}:
  true  false  false  false
  true  false  false  false
 false  false  false  false
  true   true  false   true

julia> x[mask]
5-element Array{Int64,1}:
  1
  2
  4
  8
 16
```

## Iteration

The recommended ways to iterate over a whole array are

```julia
for a in A
    # Do something with the element a
end

for i in eachindex(A)
    # Do something with i and/or A[i]
end
```

The first construct is used when you need the value, but not index, of each element. In the second
construct, `i` will be an `Int` if `A` is an array type with fast linear indexing; otherwise,
it will be a `CartesianIndex`:

```jldoctest
julia> A = rand(4,3);

julia> B = view(A, 1:3, 2:3);

julia> for i in eachindex(B)
           @show i
       end
i = CartesianIndex(1, 1)
i = CartesianIndex(2, 1)
i = CartesianIndex(3, 1)
i = CartesianIndex(1, 2)
i = CartesianIndex(2, 2)
i = CartesianIndex(3, 2)
```

In contrast with `for i = 1:length(A)`, iterating with [`eachindex`](@ref) provides an efficient way to
iterate over any array type.

## Array traits

If you write a custom [`AbstractArray`](@ref) type, you can specify that it has fast linear indexing using

```julia
Base.IndexStyle(::Type{<:MyArray}) = IndexLinear()
```

This setting will cause `eachindex` iteration over a `MyArray` to use integers. If you don't
specify this trait, the default value `IndexCartesian()` is used.

## Array and Vectorized Operators and Functions

The following operators are supported for arrays:

1. Unary arithmetic -- `-`, `+`
2. Binary arithmetic -- `-`, `+`, `*`, `/`, `\`, `^`
3. Comparison -- `==`, `!=`, `≈` ([`isapprox`](@ref)), `≉`

To enable convenient vectorization of mathematical and other operations,
Julia [provides the dot syntax](@ref man-vectorized) `f.(args...)`, e.g. `sin.(x)`
or `min.(x,y)`, for elementwise operations over arrays or mixtures of arrays and
scalars (a [Broadcasting](@ref) operation); these have the additional advantage of
"fusing" into a single loop when combined with other dot calls, e.g. `sin.(cos.(x))`.

Also, *every* binary operator supports a [dot version](@ref man-dot-operators)
that can be applied to arrays (and combinations of arrays and scalars) in such
[fused broadcasting operations](@ref man-vectorized), e.g. `z .== sin.(x .* y)`.

Note that comparisons such as `==` operate on whole arrays, giving a single boolean
answer. Use dot operators like `.==` for elementwise comparisons. (For comparison
operations like `<`, *only* the elementwise `.<` version is applicable to arrays.)

Also notice the difference between `max.(a,b)`, which [`broadcast`](@ref)s [`max`](@ref)
elementwise over `a` and `b`, and [`maximum(a)`](@ref), which finds the largest value within
`a`. The same relationship holds for `min.(a,b)` and `minimum(a)`.

## Broadcasting

It is sometimes useful to perform element-by-element binary operations on arrays of different
sizes, such as adding a vector to each column of a matrix. An inefficient way to do this would
be to replicate the vector to the size of the matrix:

```julia-repl
julia> a = rand(2,1); A = rand(2,3);

julia> repeat(a,1,3)+A
2×3 Array{Float64,2}:
 1.20813  1.82068  1.25387
 1.56851  1.86401  1.67846
```

This is wasteful when dimensions get large, so Julia provides [`broadcast`](@ref), which expands
singleton dimensions in array arguments to match the corresponding dimension in the other array
without using extra memory, and applies the given function elementwise:

```julia-repl
julia> broadcast(+, a, A)
2×3 Array{Float64,2}:
 1.20813  1.82068  1.25387
 1.56851  1.86401  1.67846

julia> b = rand(1,2)
1×2 Array{Float64,2}:
 0.867535  0.00457906

julia> broadcast(+, a, b)
2×2 Array{Float64,2}:
 1.71056  0.847604
 1.73659  0.873631
```

[Dotted operators](@ref man-dot-operators) such as `.+` and `.*` are equivalent
to `broadcast` calls (except that they fuse, as described below). There is also a
[`broadcast!`](@ref) function to specify an explicit destination (which can also
be accessed in a fusing fashion by `.=` assignment). In fact, `f.(args...)`
is equivalent to `broadcast(f, args...)`, providing a convenient syntax to broadcast any function
([dot syntax](@ref man-vectorized)). Nested "dot calls" `f.(...)` (including calls to `.+` etcetera)
[automatically fuse](@ref man-dot-operators) into a single `broadcast` call.

Additionally, [`broadcast`](@ref) is not limited to arrays (see the function documentation),
it also handles tuples and treats any argument that is not an array, tuple or [`Ref`](@ref)
(except for [`Ptr`](@ref)) as a "scalar".

```jldoctest
julia> convert.(Float32, [1, 2])
2-element Array{Float32,1}:
 1.0
 2.0

julia> ceil.((UInt8,), [1.2 3.4; 5.6 6.7])
2×2 Array{UInt8,2}:
 0x02  0x04
 0x06  0x07

julia> string.(1:3, ". ", ["First", "Second", "Third"])
3-element Array{String,1}:
 "1. First"
 "2. Second"
 "3. Third"
```

## Implementation

The base array type in Julia is the abstract type [`AbstractArray{T,N}`](@ref). It is parameterized by
the number of dimensions `N` and the element type `T`. [`AbstractVector`](@ref) and [`AbstractMatrix`](@ref) are
aliases for the 1-d and 2-d cases. Operations on `AbstractArray` objects are defined using higher
level operators and functions, in a way that is independent of the underlying storage. These operations
generally work correctly as a fallback for any specific array implementation.

The `AbstractArray` type includes anything vaguely array-like, and implementations of it might
be quite different from conventional arrays. For example, elements might be computed on request
rather than stored. However, any concrete `AbstractArray{T,N}` type should generally implement
at least [`size(A)`](@ref) (returning an `Int` tuple), [`getindex(A,i)`](@ref) and [`getindex(A,i1,...,iN)`](@ref getindex);
mutable arrays should also implement [`setindex!`](@ref). It is recommended that these operations
have nearly constant time complexity, or technically Õ(1) complexity, as otherwise some array
functions may be unexpectedly slow. Concrete types should also typically provide a [`similar(A,T=eltype(A),dims=size(A))`](@ref)
method, which is used to allocate a similar array for [`copy`](@ref) and other out-of-place
operations. No matter how an `AbstractArray{T,N}` is represented internally, `T` is the type of
object returned by *integer* indexing (`A[1, ..., 1]`, when `A` is not empty) and `N` should be
the length of the tuple returned by [`size`](@ref). For more details on defining custom
`AbstractArray` implementations, see the [array interface guide in the interfaces chapter](@ref man-interface-array).

`DenseArray` is an abstract subtype of `AbstractArray` intended to include all arrays where
elements are stored contiguously in column-major order (see additional notes in
[Performance Tips](@ref man-performance-tips)). The [`Array`](@ref) type is a specific instance
of `DenseArray`;  [`Vector`](@ref) and [`Matrix`](@ref) are aliases for the 1-d and 2-d cases.
Very few operations are implemented specifically for `Array` beyond those that are required
for all `AbstractArray`s; much of the array library is implemented in a generic
manner that allows all custom arrays to behave similarly.

`SubArray` is a specialization of `AbstractArray` that performs indexing by
sharing memory with the original array rather than by copying it. A `SubArray`
is created with the [`view`](@ref) function, which is called the same way as
[`getindex`](@ref) (with an array and a series of index arguments). The result
of [`view`](@ref) looks the same as the result of [`getindex`](@ref), except the
data is left in place. [`view`](@ref) stores the input index vectors in a
`SubArray` object, which can later be used to index the original array
indirectly.  By putting the [`@views`](@ref) macro in front of an expression or
block of code, any `array[...]` slice in that expression will be converted to
create a `SubArray` view instead.

[`BitArray`](@ref)s are space-efficient "packed" boolean arrays, which store one bit per boolean value.
They can be used similarly to `Array{Bool}` arrays (which store one byte per boolean value),
and can be converted to/from the latter via `Array(bitarray)` and `BitArray(array)`, respectively.

A "strided" array is stored in memory with elements laid out in regular offsets such that
an instance with a supported `isbits` element type can be passed to
external C and Fortran functions that expect this memory layout. Strided arrays
must define a [`strides(A)`](@ref) method that returns a tuple of "strides" for each dimension; a
provided [`stride(A,k)`](@ref) method accesses the `k`th element within this tuple. Increasing the
index of dimension `k` by `1` should increase the index `i` of [`getindex(A,i)`](@ref) by
[`stride(A,k)`](@ref). If a pointer conversion method [`Base.unsafe_convert(Ptr{T}, A)`](@ref) is
provided, the memory layout must correspond in the same way to these strides. `DenseArray` is a
very specific example of a strided array where the elements are arranged contiguously, thus it
provides its subtypes with the appropriate definition of `strides`. More concrete examples
can be found within the [interface guide for strided arrays](@ref man-interface-strided-arrays).
[`StridedVector`](@ref) and [`StridedMatrix`](@ref) are convenient aliases for many of the builtin array types that
are considered strided arrays, allowing them to dispatch to select specialized implementations that
call highly tuned and optimized BLAS and LAPACK functions using just the pointer and strides.

The following example computes the QR decomposition of a small section of a larger array, without
creating any temporaries, and by calling the appropriate LAPACK function with the right leading
dimension size and stride parameters.

```julia-repl
julia> a = rand(10, 10)
10×10 Array{Float64,2}:
 0.517515  0.0348206  0.749042   0.0979679  …  0.75984     0.950481   0.579513
 0.901092  0.873479   0.134533   0.0697848     0.0586695   0.193254   0.726898
 0.976808  0.0901881  0.208332   0.920358      0.288535    0.705941   0.337137
 0.657127  0.0317896  0.772837   0.534457      0.0966037   0.700694   0.675999
 0.471777  0.144969   0.0718405  0.0827916     0.527233    0.173132   0.694304
 0.160872  0.455168   0.489254   0.827851   …  0.62226     0.0995456  0.946522
 0.291857  0.769492   0.68043    0.629461      0.727558    0.910796   0.834837
 0.775774  0.700731   0.700177   0.0126213     0.00822304  0.327502   0.955181
 0.9715    0.64354    0.848441   0.241474      0.591611    0.792573   0.194357
 0.646596  0.575456   0.0995212  0.038517      0.709233    0.477657   0.0507231

julia> b = view(a, 2:2:8,2:2:4)
4×2 view(::Array{Float64,2}, 2:2:8, 2:2:4) with eltype Float64:
 0.873479   0.0697848
 0.0317896  0.534457
 0.455168   0.827851
 0.700731   0.0126213

julia> (q, r) = qr(b);

julia> q
4×4 LinearAlgebra.QRCompactWYQ{Float64,Array{Float64,2}}:
 -0.722358    0.227524  -0.247784    -0.604181
 -0.0262896  -0.575919  -0.804227     0.144377
 -0.376419   -0.75072    0.540177    -0.0541979
 -0.579497    0.230151  -0.00552346   0.781782

julia> r
2×2 Array{Float64,2}:
 -1.20921  -0.383393
  0.0      -0.910506
```
