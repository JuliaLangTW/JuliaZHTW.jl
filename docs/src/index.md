# Julia Taiwan 中文文件

歡迎來到 Julia Taiwan 中文文件，當前翻譯對應版本為 v0.6。

## 概論 (Introduction)

科學計算一般來說需要極高的效能，然而領域專家往往使用較緩慢的動態程式語言進行開發。我們相信選擇動態語言是基於很多應用上的好理由，所以我們也不希望他們消失。幸運的是，現代語言設計與編譯器技術能讓解決大部分效能取捨的問題，提供單一且具足夠生產力的環境讓大家打造原型，並且可以有效率的交付效能吃重的應用程式。Julia 程式語言足以擔綱這個角色：它是一個具有彈性的動態語言，適合科學與數值運算，同時在效能可以與傳統靜態型別語言媲美。

Julia 的編譯器與 Python 或 R 的直譯器不同，你起初會發現 Julia 的效能是違反直覺的。如果你發現某些東西慢了，在嘗試其他方法之前，我們強烈建議你閱讀 [效能建議 (Performance Tips)](@ref man-performance-tips) 章節。一旦你了解 Julia 的運作方式之後，你可以很簡單地寫出接近 C 語言效能的程式。

Julia 的特色有選擇性型別宣告 (optional typing)、多重分派 (multiple dispatch,) 跟絕佳的效能，藉由型別推斷 (type inference) 以及 [just-in-time (JIT) compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) 達成，語言核心以 [LLVM](https://en.wikipedia.org/wiki/Low_Level_Virtual_Machine) 實作。它是一個多典範（multi-paradigm) 語言，結合了命令式 (imperative)、函數式 (functional) 跟物件導向 (object-oriented programming)。Julia 為高階數值運算提供了易用性與表達性語法，就像 R、MATLAB 跟 Python 語言一般，除此之外也可以用於一般程式設計。為了達成這些，Julia 承襲了數學程式語言，也向主流程式語言借鏡了不少，其中包含 [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language))、 [Perl](https://en.wikipedia.org/wiki/Perl_(programming_language))、[Python](https://en.wikipedia.org/wiki/Python_(programming_language))、[Lua](https://en.wikipedia.org/wiki/Lua_(programming_language))、跟 [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language))。

Julia，相較於典型動態語言，最亮眼的部份包含：

* 小巧的語言核心；標準程式庫本身即是由 Julia 自身撰寫而成，包含原始操作 (primitive operations)，像是整數算術運算
* 擁有豐富型別用以建構及敘述物件，也可以做選擇性型別宣告
* 定義函式行為的能力，藉由多重分派，作用於不同的參數型別組合
* 針對不同的參數型別組合自動產生有效率、特化的程式碼
* 絕佳效能，逼近靜態編譯語言，像 C

動態語言使用起來有時候常會以為它是「無型別」，但事實上絕對不是這樣的：每個物件，無論是原始型別或是使用者定義的，都有一個型別。在大多數動態語言中都缺乏型別宣告，然而，這意味著我們無法告訴編譯器關於值的型別，也時常無法明確地討論型別(and often cannot explicitly talk about types at all)。另一方面，在靜態語言，我們可以，通常也是必須，標記型別，型別只存在於 compile time 而且在 run-time 不能被操作或是表示。在 Julia 中，型別本身就是在 run-time 的物件，而且可以用來傳達資訊給編譯器。

一般的程式設計師不需要特別去使用型別或多重分派，他們是 Julia 的共同核心功能：函式被定義在不同參數型別的組合上，而且會被發派給最相符的函式定義上計算。這個模型很適合數學計算，相較於讓第一個參數「擁有」一個運算，例同傳統物件導向的作法，反而是不自然的。運算子就只是有特別符號的函式-你可以定義新的方法到`+`函式上，讓加法延伸到使用者定義的型別上。現存的程式碼仍然可以無縫地銜接到新的資料型別上。

一方面得益於 run-time 的型別推斷 (augmented by optional type annotations)，以及起初就聚焦於運算效能，Julia 的計算效率超越其他動態語言，甚至是其他靜態編譯語言。對於一個大型數值問題，速度一直以來都是，也一直會是，也可能永遠是最重要的：這幾十年來，需要處理的資料量已經輕易的趕上了摩爾定律 (Moore’s Law)。

Julia 的目標是成為前所未有，集易用、強大與效率於一身的語言。除了上述以外，一些Julia的優勢包含:

* 免費而且開源 ([MIT licensed](https://github.com/JuliaLang/julia/blob/master/LICENSE.md))
* 使用者定義型別與內建型別一樣小巧快速
* 不需要為了效能向量化程式碼；去向量化的程式碼就是快
* 特別適合平行化與分散式運算
* 輕量的「綠色」執行緒 ([coroutines](https://en.wikipedia.org/wiki/Coroutine))
* 不突兀而強大的型別系統
* 優雅而可擴充的轉型與向上轉型
* 支援 [Unicode](https://en.wikipedia.org/wiki/Unicode)，包含但不限於 [UTF-8](https://en.wikipedia.org/wiki/UTF-8)
* 直接呼叫 C 函式 (不需要包裝或是使用特殊 APIs)
* 強大的shell-like行程管理能力
* Lisp般的macros與其他metaprogramming的能力

[文件原文](https://docs.julialang.org/en/stable/manual/introduction/#man-introduction-1)

