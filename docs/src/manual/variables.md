# 變數

一個變數，在 Julia 中，是一個名稱被關聯 (或是綁定) 到一個值。當你想要將值 (你可能是從一些數學運算得到的) 儲存起來以便以後使用，這會很有用。舉例來說：

```
# 指定 10 的值給變數 x
julia> x = 10
10

# 對 x 的值做一些數學運算
julia> x + 1
11

# 重新指定 x 的值
julia> x = 1 + 1
2

# 你可以指定其他型別的值，像是一個字串
julia> x = "Hello World!"
"Hello World!"
```

Julia 提供了極有彈性的變數命名系統。
變數名稱是有區分大小寫的 (case-sensitive)，而且沒有語意上的意義（no semantic meaning)。也就是說，語言不會因為命名不同，而讓變數有所差別。

```
julia> x = 1.0
1.0

julia> y = -3
-3

julia> Z = "My string"
"My string"

julia> customary_phrase = "Hello world!"
"Hello world!"

julia> UniversalDeclarationOfHumanRightsStart = "人人生而自由，在尊严和权利上一律平等。"
"人人生而自由，在尊严和权利上一律平等。"
```

允許以 Unicode 命名（使用 UTF-8）：

```
julia> δ = 0.00001
1.0e-5

julia> 안녕하세요 = "Hello"
"Hello"
```

在 Julia REPL 與一些其他的編輯環境中，你可以鍵入很多 Unicode 的數學符號，藉由鍵入反斜線的 LaTeX 符號，最後加上 **tab**。舉例來說，變數名稱`δ`可以藉由鍵入`\delta`-**tab**，或是甚至`α̂₂`可以鍵入`\alpha`-**tab**-`\hat`-**tab**-`\_2`-**tab**。


如果有需要的話，Julia 也允許你重新定義內建的常數跟函式：

```
julia> pi
π = 3.1415926535897...

julia> pi = 3
WARNING: imported binding for pi overwritten in module Main
3

julia> pi
3

julia> sqrt(100)
10.0

julia> sqrt = 4
WARNING: imported binding for sqrt overwritten in module Main
4
```

然而，這顯然是不建議這麼做，以避免潛在的衝突。


## 合法變數名稱

變數名稱必須以英文字母開頭 (A-Z 或 a-z)、底線 (`_`) 或是碼位大於 `00A0` 的 Unicode 子字符集組成。具體來說，Unicode 字符類別 Lu/Ll/Lt/Lm/Lo/Nl (英文字母)、Sc/So (貨幣與其他符號) 和一些其他類字母字符 (例如一部分 Sm 類別中的數學字符) 都是可以使用的。後續字符則可額外使用 `!` 與數字 (0-9 或 Nd/No 字符類別中的符號)，再加上其他 Unicode 碼位：變音字符 (diacritics) 與其他修飾字符 (modifying marks，字符類別 Mn/Mc/Me/Sk)、部分標點連結字符 (puctuation connectors，字符類別 Pc)、primes 字符與少部份其他字符。

諸如`+`等運算符也可以當作合法的名稱，只是解析方式與一般變數不同。在某些情境下，運算符可以被當作一般變數使用；舉例來說，`(+)`代表著加法函數，也可以使用 `(+) = f` 覆寫它。大部分 Unicode 中綴 (infix) 運算符 (字符類別 Sm)，例如 ⊕，也會被解析為中綴運算符且可用於使用者自定義的方法 (例如你可以使用`const ⊕ = kron`將 ⊕ 定義成中綴 Kronecker 積運算符)。

唯一被明確地禁止使用的名稱為內建陳述句：

```
julia> else = false
ERROR: syntax: unexpected "else"
...

julia> try = "No"
ERROR: syntax: unexpected "="
...
```

部分 Unicode 字符被用來當作變數識別符使用時，將會被視為等價符號。以不同方式輸入的 Unicode 組合字符 (例如：重音`'`) 會是等價的 (具體來說，Julia 的識別符會被 NFC-正規化，NFC-Normalized)。Uncode 字元 ɛ (U+025B：拉丁文中的小寫 e) 與 µ (U+00B5：micro sign) 與其相對應的希臘字母將會被視為等價，因為在某些輸入法下，前者可以很容易地輸入。


## 慣用風格

雖然 Julia 並未強加限制在可使用名稱上，但遵循下列慣例對開發上會很有幫助：

- 變數名稱使用小寫符號。
- 可用底線 (`_`) 分隔名稱，但如非必要並不鼓勵使用。
- 類別與模組名稱使用大寫開頭，並使用駝峰式命名 (camel case) 取代底線。
- 函數與巨集 (macro) 以小寫符號命名，不使用底線。
- 以`!`結尾的名稱為會複寫其變數的函數命名。因為這類函數再回傳後將會改變其變數的值，而不是單純回傳一個值，所以這類函數又常被稱作 "mutating" 或 "in-place" 函數。

如需要更多慣用風格的資訊，請參閱[程式風格指引](@ref man-style-guide)一節。
