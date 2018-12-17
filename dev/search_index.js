var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "首頁",
    "title": "首頁",
    "category": "page",
    "text": ""
},

{
    "location": "#Julia-Taiwan-中文文件-1",
    "page": "首頁",
    "title": "Julia Taiwan 中文文件",
    "category": "section",
    "text": "歡迎來到 Julia Taiwan 中文文件，當前翻譯對應版本為 v0.6。"
},

{
    "location": "#概論-(Introduction)-1",
    "page": "首頁",
    "title": "概論 (Introduction)",
    "category": "section",
    "text": "科學計算一般來說需要極高的效能，然而領域專家往往使用較緩慢的動態程式語言進行開發。我們相信選擇動態語言是基於很多應用上的好理由，所以我們也不希望他們消失。幸運的是，現代語言設計與編譯器技術能讓解決大部分效能取捨的問題，提供單一且具足夠生產力的環境讓大家打造原型，並且可以有效率的交付效能吃重的應用程式。Julia 程式語言足以擔綱這個角色：它是一個具有彈性的動態語言，適合科學與數值運算，同時在效能可以與傳統靜態型別語言媲美。Julia 的編譯器與 Python 或 R 的直譯器不同，你起初會發現 Julia 的效能是違反直覺的。如果你發現某些東西慢了，在嘗試其他方法之前，我們強烈建議你閱讀 效能建議 (Performance Tips) 章節。一旦你了解 Julia 的運作方式之後，你可以很簡單地寫出接近 C 語言效能的程式。Julia 的特色有選擇性型別宣告 (optional typing)、多重分派 (multiple dispatch,) 跟絕佳的效能，藉由型別推斷 (type inference) 以及 just-in-time (JIT) compilation 達成，語言核心以 LLVM 實作。它是一個多典範（multi-paradigm) 語言，結合了命令式 (imperative)、函數式 (functional) 跟物件導向 (object-oriented programming)。Julia 為高階數值運算提供了易用性與表達性語法，就像 R、MATLAB 跟 Python 語言一般，除此之外也可以用於一般程式設計。為了達成這些，Julia 承襲了數學程式語言，也向主流程式語言借鏡了不少，其中包含 Lisp、 Perl、Python、Lua、跟 Ruby。Julia，相較於典型動態語言，最亮眼的部份包含：小巧的語言核心；標準程式庫本身即是由 Julia 自身撰寫而成，包含原始操作 (primitive operations)，像是整數算術運算\n擁有豐富型別用以建構及敘述物件，也可以做選擇性型別宣告\n定義函式行為的能力，藉由多重分派，作用於不同的參數型別組合\n針對不同的參數型別組合自動產生有效率、特化的程式碼\n絕佳效能，逼近靜態編譯語言，像 C動態語言使用起來有時候常會以為它是「無型別」，但事實上絕對不是這樣的：每個物件，無論是原始型別或是使用者定義的，都有一個型別。在大多數動態語言中都缺乏型別宣告，然而，這意味著我們無法告訴編譯器關於值的型別，也時常無法明確地討論型別(and often cannot explicitly talk about types at all)。另一方面，在靜態語言，我們可以，通常也是必須，標記型別，型別只存在於 compile time 而且在 run-time 不能被操作或是表示。在 Julia 中，型別本身就是在 run-time 的物件，而且可以用來傳達資訊給編譯器。一般的程式設計師不需要特別去使用型別或多重分派，他們是 Julia 的共同核心功能：函式被定義在不同參數型別的組合上，而且會被發派給最相符的函式定義上計算。這個模型很適合數學計算，相較於讓第一個參數「擁有」一個運算，例同傳統物件導向的作法，反而是不自然的。運算子就只是有特別符號的函式-你可以定義新的方法到+函式上，讓加法延伸到使用者定義的型別上。現存的程式碼仍然可以無縫地銜接到新的資料型別上。一方面得益於 run-time 的型別推斷 (augmented by optional type annotations)，以及起初就聚焦於運算效能，Julia 的計算效率超越其他動態語言，甚至是其他靜態編譯語言。對於一個大型數值問題，速度一直以來都是，也一直會是，也可能永遠是最重要的：這幾十年來，需要處理的資料量已經輕易的趕上了摩爾定律 (Moore’s Law)。Julia 的目標是成為前所未有，集易用、強大與效率於一身的語言。除了上述以外，一些Julia的優勢包含:免費而且開源 (MIT licensed)\n使用者定義型別與內建型別一樣小巧快速\n不需要為了效能向量化程式碼；去向量化的程式碼就是快\n特別適合平行化與分散式運算\n輕量的「綠色」執行緒 (coroutines)\n不突兀而強大的型別系統\n優雅而可擴充的轉型與向上轉型\n支援 Unicode，包含但不限於 UTF-8\n直接呼叫 C 函式 (不需要包裝或是使用特殊 APIs)\n強大的shell-like行程管理能力\nLisp般的macros與其他metaprogramming的能力文件原文"
},

{
    "location": "manual/getting-started/#",
    "page": "入門 (Getting Started)",
    "title": "入門 (Getting Started)",
    "category": "page",
    "text": ""
},

{
    "location": "manual/getting-started/#入門（Getting-Started）-1",
    "page": "入門 (Getting Started)",
    "title": "入門（Getting Started）",
    "category": "section",
    "text": "安裝 Julia，不管是安裝事先編譯好的執行檔，還是從原始碼開始編譯都非常簡單。按照這裡的說明來下載安裝即可。使用互動式介面 (或稱為repl) 是學習 Julia 最簡單的方式，可以直接雙擊 Julia 執行檔或是從命令列執行julia即可：$ julia\n               _\n   _       _ _(_)_     |  A fresh approach to technical computing\n  (_)     | (_) (_)    |  Documentation: https://docs.julialang.org\n   _ _   _| |_  __ _   |  Type \"?help\" for help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 0.5.0-dev+2440 (2016-02-01 02:22 UTC)\n _/ |\\__\'_|_|_|\\__\'_|  |  Commit 2bb94d6 (11 days old master)\n|__/                   |  x86_64-apple-darwin13.1.0\n\njulia> 1 + 2\n3\n\njulia> ans\n3按下^D–control加上D鍵或是輸入quit()即可離開互動式介面。進入julia互動式介面時，將會看到印有 Julia 圖樣的橫幅標題與命令提示字元供使用者輸入指令。一旦使用者輸入一組完整的指令，例如1 + 2，並按下輸入鍵 (enter/return)，Julia 的互動介面將會對輸入的指令取值並在螢幕上印出最後的結果。若輸入的指令以分號 (;) 結尾，互動介面將不會印出最後的運算結果。ans 變數會自動與上一次運算的結果 (無論是否印出) 綁定。需要注意的是，ans變數只在互動介面下會被綁定，在其他 Julia 的執行環境下並不會有這樣的行為。如需在互動介面下對寫在其他 Julia 腳本 (script) 的指令取值 (例如file.jl)，可以使用 include(\"file.jl\") 指令即可。如需直接執行 Julia 腳本的指令，可以把腳本檔案名稱當做julia執行檔的第一個變數：$ julia script.jl arg1 arg2...如同上述範例所示，緊接於script.jl腳本後的變數會被當作命令列變數被綁定於ARGS這個julia的全域變數中。腳本檔案的名稱則是被綁定於PROGRAM_FILE這個全域變數中。另外，當指令藉由-e傳入julia執行檔時，ARGS全域變數仍會被綁定，但PROGRAM_FILE將會是個空字串。舉例來說，如果希望印出配傳入的所有變數，你可以執行下列命令：$ julia -e \'println(PROGRAM_FILE); for x in ARGS; println(x); end\' foo bar\n\nfoo\nbar或者是將指令寫入一個檔案中並執行：$ echo \'println(PROGRAM_FILE); for x in ARGS; println(x); end\' > script.jl\n$ julia script.jl foo bar\nscript.jl\nfoo\nbar--分隔符號可用來分別指定用於 Julia 命令列的變數與用於腳本的變數：$ julia --color=yes -O -- foo.jl arg1 arg2..Julia 也可以使用-p或--machinefile命令列選項執行平行化模式。使用-p n將會開啟額外n個工作行程，而當使用--machinefile file時將會根據每行file中定義節點位址上開啟工作行程。被定義於file中的機器必須要可以無密碼 (passwordless) 的方式藉由ssh登入，且所有節點的 Julia 命令列必須被安裝在與主機 (host) 相同的系統路徑上。file中定義的節點必須遵循以下格式[count*][user@]host[:port] [bind_addr[:port]]。user預設為當下使用者名稱，port預設為標準 ssh 端口。count為節點上欲開啟的工作行程數量，預設為 1 。bind_addr[:port]為可選參數，可用來指定其他工作行程用來連接節點所用的位址與端口。你可以將預設想執行的指令寫於 ~/.juliarc.jl，Julia 會於開啟時執行其中所有指令：$ echo \'println(\"Greetings! 你好! 안녕하세요?\")\' > ~/.juliarc.jl\n$ julia\nGreetings! 你好! 안녕하세요?\n\n...Julia 提供多種方式執行 Julia 程式碼與多種可選選項，類似於perl與ruby：$ julia -h\njulia [switches] -- [programfile] [args...]\n -v, --version             Display version information\n -h, --help                Print this message\n\n -J, --sysimage <file>     Start up with the given system image file\n --precompiled={yes|no}    Use precompiled code from system image if available\n --compilecache={yes|no}   Enable/disable incremental precompilation of modules\n -H, --home <dir>          Set location of `julia` executable\n --startup-file={yes|no}   Load ~/.juliarc.jl\n --handle-signals={yes|no} Enable or disable Julia\'s default signal handlers\n\n -e, --eval <expr>         Evaluate <expr>\n -E, --print <expr>        Evaluate and show <expr>\n -L, --load <file>         Load <file> immediately on all processors\n\n -p, --procs {N|auto}      Integer value N launches N additional local worker processes\n                           \"auto\" launches as many workers as the number of local cores\n --machinefile <file>      Run processes on hosts listed in <file>\n\n -i                        Interactive mode; REPL runs and isinteractive() is true\n -q, --quiet               Quiet startup (no banner)\n --color={yes|no}          Enable or disable color text\n --history-file={yes|no}   Load or save history\n\n --compile={yes|no|all|min}Enable or disable JIT compiler, or request exhaustive compilation\n -C, --cpu-target <target> Limit usage of cpu features up to <target>\n -O, --optimize={0,1,2,3}  Set the optimization level (default is 2 if unspecified or 3 if specified as -O)\n -g, -g <level>            Enable / Set the level of debug info generation (default is 1 if unspecified or 2 if specified as -g)\n --inline={yes|no}         Control whether inlining is permitted (overrides functions declared as @inline)\n --check-bounds={yes|no}   Emit bounds checks always or never (ignoring declarations)\n --math-mode={ieee,fast}   Disallow or enable unsafe floating point optimizations (overrides @fastmath declaration)\n\n --depwarn={yes|no|error}  Enable or disable syntax and method deprecation warnings (\"error\" turns warnings into errors)\n\n --output-o name           Generate an object file (including system image data)\n --output-ji name          Generate a system image data file (.ji)\n --output-bc name          Generate LLVM bitcode (.bc)\n --output-incremental=no   Generate an incremental output file (rather than complete)\n\n --code-coverage={none|user|all}, --code-coverage\n                           Count executions of source lines (omitting setting is equivalent to \"user\")\n --track-allocation={none|user|all}, --track-allocation\n                           Count bytes allocated by each source line"
},

{
    "location": "manual/getting-started/#相關資源-1",
    "page": "入門 (Getting Started)",
    "title": "相關資源",
    "category": "section",
    "text": "除了這份手冊之外，Julia 的新使用者也可以參考以下相關資源來入手 Julia：Julia and IJulia cheatsheet\nLearn Julia in a few minutes\nLearn Julia the Hard Way\nJulia by Example\nHands-on Julia\nTutorial for Homer Reid\'s numerical analysis class\nAn introductory presentation\nVideos from the Julia tutorial at MIT\nYouTube videos from the JuliaCons"
},

{
    "location": "manual/variables/#",
    "page": "變數 (Variables)",
    "title": "變數 (Variables)",
    "category": "page",
    "text": ""
},

{
    "location": "manual/variables/#變數-1",
    "page": "變數 (Variables)",
    "title": "變數",
    "category": "section",
    "text": "一個變數，在 Julia 中，是一個名稱被關聯 (或是綁定) 到一個值。當你想要將值 (你可能是從一些數學運算得到的) 儲存起來以便以後使用，這會很有用。舉例來說：# 指定 10 的值給變數 x\njulia> x = 10\n10\n\n# 對 x 的值做一些數學運算\njulia> x + 1\n11\n\n# 重新指定 x 的值\njulia> x = 1 + 1\n2\n\n# 你可以指定其他型別的值，像是一個字串\njulia> x = \"Hello World!\"\n\"Hello World!\"Julia 提供了極有彈性的變數命名系統。 變數名稱是有區分大小寫的 (case-sensitive)，而且沒有語意上的意義（no semantic meaning)。也就是說，語言不會因為命名不同，而讓變數有所差別。julia> x = 1.0\n1.0\n\njulia> y = -3\n-3\n\njulia> Z = \"My string\"\n\"My string\"\n\njulia> customary_phrase = \"Hello world!\"\n\"Hello world!\"\n\njulia> UniversalDeclarationOfHumanRightsStart = \"人人生而自由，在尊严和权利上一律平等。\"\n\"人人生而自由，在尊严和权利上一律平等。\"允許以 Unicode 命名（使用 UTF-8）：julia> δ = 0.00001\n1.0e-5\n\njulia> 안녕하세요 = \"Hello\"\n\"Hello\"在 Julia REPL 與一些其他的編輯環境中，你可以鍵入很多 Unicode 的數學符號，藉由鍵入反斜線的 LaTeX 符號，最後加上 tab。舉例來說，變數名稱δ可以藉由鍵入\\delta-tab，或是甚至α̂₂可以鍵入\\alpha-tab-\\hat-tab-\\_2-tab。如果有需要的話，Julia 也允許你重新定義內建的常數跟函式：julia> pi\nπ = 3.1415926535897...\n\njulia> pi = 3\nWARNING: imported binding for pi overwritten in module Main\n3\n\njulia> pi\n3\n\njulia> sqrt(100)\n10.0\n\njulia> sqrt = 4\nWARNING: imported binding for sqrt overwritten in module Main\n4然而，這顯然是不建議這麼做，以避免潛在的衝突。"
},

{
    "location": "manual/variables/#合法變數名稱-1",
    "page": "變數 (Variables)",
    "title": "合法變數名稱",
    "category": "section",
    "text": "變數名稱必須以英文字母開頭 (A-Z 或 a-z)、底線 (_) 或是碼位大於 00A0 的 Unicode 子字符集組成。具體來說，Unicode 字符類別 Lu/Ll/Lt/Lm/Lo/Nl (英文字母)、Sc/So (貨幣與其他符號) 和一些其他類字母字符 (例如一部分 Sm 類別中的數學字符) 都是可以使用的。後續字符則可額外使用 ! 與數字 (0-9 或 Nd/No 字符類別中的符號)，再加上其他 Unicode 碼位：變音字符 (diacritics) 與其他修飾字符 (modifying marks，字符類別 Mn/Mc/Me/Sk)、部分標點連結字符 (puctuation connectors，字符類別 Pc)、primes 字符與少部份其他字符。諸如+等運算符也可以當作合法的名稱，只是解析方式與一般變數不同。在某些情境下，運算符可以被當作一般變數使用；舉例來說，(+)代表著加法函數，也可以使用 (+) = f 覆寫它。大部分 Unicode 中綴 (infix) 運算符 (字符類別 Sm)，例如 ⊕，也會被解析為中綴運算符且可用於使用者自定義的方法 (例如你可以使用const ⊕ = kron將 ⊕ 定義成中綴 Kronecker 積運算符)。唯一被明確地禁止使用的名稱為內建陳述句：julia> else = false\nERROR: syntax: unexpected \"else\"\n...\n\njulia> try = \"No\"\nERROR: syntax: unexpected \"=\"\n...部分 Unicode 字符被用來當作變數識別符使用時，將會被視為等價符號。以不同方式輸入的 Unicode 組合字符 (例如：重音\') 會是等價的 (具體來說，Julia 的識別符會被 NFC-正規化，NFC-Normalized)。Uncode 字元 ɛ (U+025B：拉丁文中的小寫 e) 與 µ (U+00B5：micro sign) 與其相對應的希臘字母將會被視為等價，因為在某些輸入法下，前者可以很容易地輸入。"
},

{
    "location": "manual/variables/#慣用風格-1",
    "page": "變數 (Variables)",
    "title": "慣用風格",
    "category": "section",
    "text": "雖然 Julia 並未強加限制在可使用名稱上，但遵循下列慣例對開發上會很有幫助：變數名稱使用小寫符號。\n可用底線 (_) 分隔名稱，但如非必要並不鼓勵使用。\n類別與模組名稱使用大寫開頭，並使用駝峰式命名 (camel case) 取代底線。\n函數與巨集 (macro) 以小寫符號命名，不使用底線。\n以!結尾的名稱為會複寫其變數的函數命名。因為這類函數再回傳後將會改變其變數的值，而不是單純回傳一個值，所以這類函數又常被稱作 \"mutating\" 或 \"in-place\" 函數。如需要更多慣用風格的資訊，請參閱程式風格指引一節。"
},

{
    "location": "manual/performance-tips/#",
    "page": "效能建議 (Performance Tips)",
    "title": "效能建議 (Performance Tips)",
    "category": "page",
    "text": ""
},

{
    "location": "manual/performance-tips/#man-performance-tips-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Performance Tips",
    "category": "section",
    "text": "In the following sections, we briefly go through a few techniques that can help make your Julia code run as fast as possible."
},

{
    "location": "manual/performance-tips/#Avoid-global-variables-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Avoid global variables",
    "category": "section",
    "text": "A global variable might have its value, and therefore its type, change at any point. This makes it difficult for the compiler to optimize code using global variables. Variables should be local, or passed as arguments to functions, whenever possible.Any code that is performance critical or being benchmarked should be inside a function.We find that global names are frequently constants, and declaring them as such greatly improves performance:const DEFAULT_VAL = 0Uses of non-constant globals can be optimized by annotating their types at the point of use:global x\ny = f(x::Int + 1)Writing functions is better style. It leads to more reusable code and clarifies what steps are being done, and what their inputs and outputs are.note: Note\nAll code in the REPL is evaluated in global scope, so a variable defined and assigned at toplevel will be a global variable.In the following REPL session:julia> x = 1.0is equivalent to:julia> global x = 1.0so all the performance issues discussed previously apply."
},

{
    "location": "manual/performance-tips/#Measure-performance-with-[@time](@ref)-and-pay-attention-to-memory-allocation-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Measure performance with @time and pay attention to memory allocation",
    "category": "section",
    "text": "A useful tool for measuring performance is the @time macro. The following example illustrates good working style:julia> function f(n)\n           s = 0\n           for i = 1:n\n               s += i/2\n           end\n           s\n       end\nf (generic function with 1 method)\n\njulia> @time f(1)\n  0.012686 seconds (2.09 k allocations: 103.421 KiB)\n0.5\n\njulia> @time f(10^6)\n  0.021061 seconds (3.00 M allocations: 45.777 MiB, 11.69% gc time)\n2.5000025e11On the first call (@time f(1)), f gets compiled.  (If you\'ve not yet used @time in this session, it will also compile functions needed for timing.)  You should not take the results of this run seriously. For the second run, note that in addition to reporting the time, it also indicated that a large amount of memory was allocated. This is the single biggest advantage of @time vs. functions like tic() and toc(), which only report time.Unexpected memory allocation is almost always a sign of some problem with your code, usually a problem with type-stability. Consequently, in addition to the allocation itself, it\'s very likely that the code generated for your function is far from optimal. Take such indications seriously and follow the advice below.For more serious benchmarking, consider the BenchmarkTools.jl package which evaluates the function multiple times in order to reduce noise.As a teaser, an improved version of this function allocates no memory (the allocation reported below is due to running the @time macro in global scope) and has an order of magnitude faster execution after the first call:julia> @time f_improved(1)\n  0.007008 seconds (1.32 k allocations: 63.640 KiB)\n0.5\n\njulia> @time f_improved(10^6)\n  0.002997 seconds (6 allocations: 192 bytes)\n2.5000025e11Below you\'ll learn how to spot the problem with f and how to fix it.In some situations, your function may need to allocate memory as part of its operation, and this can complicate the simple picture above. In such cases, consider using one of the tools below to diagnose problems, or write a version of your function that separates allocation from its algorithmic aspects (see Pre-allocating outputs)."
},

{
    "location": "manual/performance-tips/#tools-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Tools",
    "category": "section",
    "text": "Julia and its package ecosystem includes tools that may help you diagnose problems and improve the performance of your code:Profiling allows you to measure the performance of your running code and identify lines that serve as bottlenecks.  For complex projects, the ProfileView package can help you visualize your profiling results.\nUnexpectedly-large memory allocations–as reported by @time, @allocated, or the profiler (through calls to the garbage-collection routines)–hint that there might be issues with your code.  If you don\'t see another reason for the allocations, suspect a type problem.  You can also start Julia with the --track-allocation=user option and examine the resulting *.mem files to see information about where those allocations occur.  See Memory allocation analysis.\n@code_warntype generates a representation of your code that can be helpful in finding expressions that result in type uncertainty. See @code_warntype below.\nThe Lint package can also warn you of certain types of programming errors."
},

{
    "location": "manual/performance-tips/#Avoid-containers-with-abstract-type-parameters-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Avoid containers with abstract type parameters",
    "category": "section",
    "text": "When working with parameterized types, including arrays, it is best to avoid parameterizing with abstract types where possible.Consider the following:a = Real[]    # typeof(a) = Array{Real,1}\nif (f = rand()) < .8\n    push!(a, f)\nendBecause a is a an array of abstract type Real, it must be able to hold any Real value.  Since Real objects can be of arbitrary size and structure, a must be represented as an array of pointers to individually allocated Real objects.  Because f will always be a Float64, we should instead, use:a = Float64[] # typeof(a) = Array{Float64,1}which will create a contiguous block of 64-bit floating-point values that can be manipulated efficiently.See also the discussion under Parametric Types."
},

{
    "location": "manual/performance-tips/#Type-declarations-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Type declarations",
    "category": "section",
    "text": "In many languages with optional type declarations, adding declarations is the principal way to make code run faster. This is not the case in Julia. In Julia, the compiler generally knows the types of all function arguments, local variables, and expressions. However, there are a few specific instances where declarations are helpful."
},

{
    "location": "manual/performance-tips/#Avoid-fields-with-abstract-type-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Avoid fields with abstract type",
    "category": "section",
    "text": "Types can be declared without specifying the types of their fields:julia> struct MyAmbiguousType\n           a\n       endThis allows a to be of any type. This can often be useful, but it does have a downside: for objects of type MyAmbiguousType, the compiler will not be able to generate high-performance code.  The reason is that the compiler uses the types of objects, not their values, to determine how to build code. Unfortunately, very little can be inferred about an object of type MyAmbiguousType:julia> b = MyAmbiguousType(\"Hello\")\nMyAmbiguousType(\"Hello\")\n\njulia> c = MyAmbiguousType(17)\nMyAmbiguousType(17)\n\njulia> typeof(b)\nMyAmbiguousType\n\njulia> typeof(c)\nMyAmbiguousTypeb and c have the same type, yet their underlying representation of data in memory is very different. Even if you stored just numeric values in field a, the fact that the memory representation of a UInt8 differs from a Float64 also means that the CPU needs to handle them using two different kinds of instructions. Since the required information is not available in the type, such decisions have to be made at run-time. This slows performance.You can do better by declaring the type of a. Here, we are focused on the case where a might be any one of several types, in which case the natural solution is to use parameters. For example:julia> mutable struct MyType{T<:AbstractFloat}\n           a::T\n       endThis is a better choice thanjulia> mutable struct MyStillAmbiguousType\n           a::AbstractFloat\n       endbecause the first version specifies the type of a from the type of the wrapper object.  For example:julia> m = MyType(3.2)\nMyType{Float64}(3.2)\n\njulia> t = MyStillAmbiguousType(3.2)\nMyStillAmbiguousType(3.2)\n\njulia> typeof(m)\nMyType{Float64}\n\njulia> typeof(t)\nMyStillAmbiguousTypeThe type of field a can be readily determined from the type of m, but not from the type of t.  Indeed, in t it\'s possible to change the type of field a:julia> typeof(t.a)\nFloat64\n\njulia> t.a = 4.5f0\n4.5f0\n\njulia> typeof(t.a)\nFloat32In contrast, once m is constructed, the type of m.a cannot change:julia> m.a = 4.5f0\n4.5f0\n\njulia> typeof(m.a)\nFloat64The fact that the type of m.a is known from m\'s type–coupled with the fact that its type cannot change mid-function–allows the compiler to generate highly-optimized code for objects like m but not for objects like t.Of course, all of this is true only if we construct m with a concrete type.  We can break this by explicitly constructing it with an abstract type:julia> m = MyType{AbstractFloat}(3.2)\nMyType{AbstractFloat}(3.2)\n\njulia> typeof(m.a)\nFloat64\n\njulia> m.a = 4.5f0\n4.5f0\n\njulia> typeof(m.a)\nFloat32For all practical purposes, such objects behave identically to those of MyStillAmbiguousType.It\'s quite instructive to compare the sheer amount code generated for a simple functionfunc(m::MyType) = m.a+1usingcode_llvm(func,Tuple{MyType{Float64}})\ncode_llvm(func,Tuple{MyType{AbstractFloat}})\ncode_llvm(func,Tuple{MyType})For reasons of length the results are not shown here, but you may wish to try this yourself. Because the type is fully-specified in the first case, the compiler doesn\'t need to generate any code to resolve the type at run-time. This results in shorter and faster code."
},

{
    "location": "manual/performance-tips/#Avoid-fields-with-abstract-containers-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Avoid fields with abstract containers",
    "category": "section",
    "text": "The same best practices also work for container types:julia> mutable struct MySimpleContainer{A<:AbstractVector}\n           a::A\n       end\n\njulia> mutable struct MyAmbiguousContainer{T}\n           a::AbstractVector{T}\n       endFor example:julia> c = MySimpleContainer(1:3);\n\njulia> typeof(c)\nMySimpleContainer{UnitRange{Int64}}\n\njulia> c = MySimpleContainer([1:3;]);\n\njulia> typeof(c)\nMySimpleContainer{Array{Int64,1}}\n\njulia> b = MyAmbiguousContainer(1:3);\n\njulia> typeof(b)\nMyAmbiguousContainer{Int64}\n\njulia> b = MyAmbiguousContainer([1:3;]);\n\njulia> typeof(b)\nMyAmbiguousContainer{Int64}For MySimpleContainer, the object is fully-specified by its type and parameters, so the compiler can generate optimized functions. In most instances, this will probably suffice.While the compiler can now do its job perfectly well, there are cases where you might wish that your code could do different things depending on the element type of a.  Usually the best way to achieve this is to wrap your specific operation (here, foo) in a separate function:julia> function sumfoo(c::MySimpleContainer)\n           s = 0\n           for x in c.a\n               s += foo(x)\n           end\n           s\n       end\nsumfoo (generic function with 1 method)\n\njulia> foo(x::Integer) = x\nfoo (generic function with 1 method)\n\njulia> foo(x::AbstractFloat) = round(x)\nfoo (generic function with 2 methods)This keeps things simple, while allowing the compiler to generate optimized code in all cases.However, there are cases where you may need to declare different versions of the outer function for different element types of a. You could do it like this:function myfun(c::MySimpleContainer{Vector{T}}) where T<:AbstractFloat\n    ...\nend\nfunction myfun(c::MySimpleContainer{Vector{T}}) where T<:Integer\n    ...\nendThis works fine for Vector{T}, but we\'d also have to write explicit versions for UnitRange{T} or other abstract types. To prevent such tedium, you can use two parameters in the declaration of MyContainer:julia> mutable struct MyContainer{T, A<:AbstractVector}\n           a::A\n       end\n\njulia> MyContainer(v::AbstractVector) = MyContainer{eltype(v), typeof(v)}(v)\nMyContainer\n\njulia> b = MyContainer(1:5);\n\njulia> typeof(b)\nMyContainer{Int64,UnitRange{Int64}}Note the somewhat surprising fact that T doesn\'t appear in the declaration of field a, a point that we\'ll return to in a moment. With this approach, one can write functions such as:julia> function myfunc(c::MyContainer{<:Integer, <:AbstractArray})\n           return c.a[1]+1\n       end\nmyfunc (generic function with 1 method)\n\njulia> function myfunc(c::MyContainer{<:AbstractFloat})\n           return c.a[1]+2\n       end\nmyfunc (generic function with 2 methods)\n\njulia> function myfunc(c::MyContainer{T,Vector{T}}) where T<:Integer\n           return c.a[1]+3\n       end\nmyfunc (generic function with 3 methods)note: Note\nBecause we can only define MyContainer for A<:AbstractArray, and any unspecified parameters are arbitrary, the first function above could have been written more succinctly as function myfunc{T<:Integer}(c::MyContainer{T})julia> myfunc(MyContainer(1:3))\n2\n\njulia> myfunc(MyContainer(1.0:3))\n3.0\n\njulia> myfunc(MyContainer([1:3;]))\n4As you can see, with this approach it\'s possible to specialize on both the element type T and the array type A.However, there\'s one remaining hole: we haven\'t enforced that A has element type T, so it\'s perfectly possible to construct an object like this:julia> b = MyContainer{Int64, UnitRange{Float64}}(UnitRange(1.3, 5.0));\n\njulia> typeof(b)\nMyContainer{Int64,UnitRange{Float64}}To prevent this, we can add an inner constructor:julia> mutable struct MyBetterContainer{T<:Real, A<:AbstractVector}\n           a::A\n           MyBetterContainer{T,A}(v::AbstractVector{T}) where {T,A} = new(v)\n       end\n\njulia> MyBetterContainer(v::AbstractVector) = MyBetterContainer{eltype(v),typeof(v)}(v)\nMyBetterContainer\n\njulia> b = MyBetterContainer(UnitRange(1.3, 5.0));\n\njulia> typeof(b)\nMyBetterContainer{Float64,UnitRange{Float64}}\n\njulia> b = MyBetterContainer{Int64, UnitRange{Float64}}(UnitRange(1.3, 5.0));\nERROR: MethodError: Cannot `convert` an object of type UnitRange{Float64} to an object of type MyBetterContainer{Int64,UnitRange{Float64}}\n[...]The inner constructor requires that the element type of A be T."
},

{
    "location": "manual/performance-tips/#Annotate-values-taken-from-untyped-locations-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Annotate values taken from untyped locations",
    "category": "section",
    "text": "It is often convenient to work with data structures that may contain values of any type (arrays of type Array{Any}). But, if you\'re using one of these structures and happen to know the type of an element, it helps to share this knowledge with the compiler:function foo(a::Array{Any,1})\n    x = a[1]::Int32\n    b = x+1\n    ...\nendHere, we happened to know that the first element of a would be an Int32. Making an annotation like this has the added benefit that it will raise a run-time error if the value is not of the expected type, potentially catching certain bugs earlier."
},

{
    "location": "manual/performance-tips/#Declare-types-of-keyword-arguments-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Declare types of keyword arguments",
    "category": "section",
    "text": "Keyword arguments can have declared types:function with_keyword(x; name::Int = 1)\n    ...\nendFunctions are specialized on the types of keyword arguments, so these declarations will not affect performance of code inside the function. However, they will reduce the overhead of calls to the function that include keyword arguments.Functions with keyword arguments have near-zero overhead for call sites that pass only positional arguments.Passing dynamic lists of keyword arguments, as in f(x; keywords...), can be slow and should be avoided in performance-sensitive code."
},

{
    "location": "manual/performance-tips/#Break-functions-into-multiple-definitions-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Break functions into multiple definitions",
    "category": "section",
    "text": "Writing a function as many small definitions allows the compiler to directly call the most applicable code, or even inline it.Here is an example of a \"compound function\" that should really be written as multiple definitions:function norm(A)\n    if isa(A, Vector)\n        return sqrt(real(dot(A,A)))\n    elseif isa(A, Matrix)\n        return maximum(svd(A)[2])\n    else\n        error(\"norm: invalid argument\")\n    end\nendThis can be written more concisely and efficiently as:norm(x::Vector) = sqrt(real(dot(x,x)))\nnorm(A::Matrix) = maximum(svd(A)[2])"
},

{
    "location": "manual/performance-tips/#Write-\"type-stable\"-functions-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Write \"type-stable\" functions",
    "category": "section",
    "text": "When possible, it helps to ensure that a function always returns a value of the same type. Consider the following definition:pos(x) = x < 0 ? 0 : xAlthough this seems innocent enough, the problem is that 0 is an integer (of type Int) and x might be of any type. Thus, depending on the value of x, this function might return a value of either of two types. This behavior is allowed, and may be desirable in some cases. But it can easily be fixed as follows:pos(x) = x < 0 ? zero(x) : xThere is also a one() function, and a more general oftype(x, y) function, which returns y converted to the type of x."
},

{
    "location": "manual/performance-tips/#Avoid-changing-the-type-of-a-variable-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Avoid changing the type of a variable",
    "category": "section",
    "text": "An analogous \"type-stability\" problem exists for variables used repeatedly within a function:function foo()\n    x = 1\n    for i = 1:10\n        x = x/bar()\n    end\n    return x\nendLocal variable x starts as an integer, and after one loop iteration becomes a floating-point number (the result of / operator). This makes it more difficult for the compiler to optimize the body of the loop. There are several possible fixes:Initialize x with x = 1.0\nDeclare the type of x: x::Float64 = 1\nUse an explicit conversion: x = oneunit(T)\nInitialize with the first loop iteration, to x = 1/bar(), then loop for i = 2:10"
},

{
    "location": "manual/performance-tips/#kernal-functions-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Separate kernel functions (aka, function barriers)",
    "category": "section",
    "text": "Many functions follow a pattern of performing some set-up work, and then running many iterations to perform a core computation. Where possible, it is a good idea to put these core computations in separate functions. For example, the following contrived function returns an array of a randomly-chosen type:DocTestSetup = quote\n    srand(1234)\nendjulia> function strange_twos(n)\n           a = Vector{rand(Bool) ? Int64 : Float64}(n)\n           for i = 1:n\n               a[i] = 2\n           end\n           return a\n       end\nstrange_twos (generic function with 1 method)\n\njulia> strange_twos(3)\n3-element Array{Float64,1}:\n 2.0\n 2.0\n 2.0This should be written as:julia> function fill_twos!(a)\n           for i=1:length(a)\n               a[i] = 2\n           end\n       end\nfill_twos! (generic function with 1 method)\n\njulia> function strange_twos(n)\n           a = Array{rand(Bool) ? Int64 : Float64}(n)\n           fill_twos!(a)\n           return a\n       end\nstrange_twos (generic function with 1 method)\n\njulia> strange_twos(3)\n3-element Array{Float64,1}:\n 2.0\n 2.0\n 2.0Julia\'s compiler specializes code for argument types at function boundaries, so in the original implementation it does not know the type of a during the loop (since it is chosen randomly). Therefore the second version is generally faster since the inner loop can be recompiled as part of fill_twos! for different types of a.The second form is also often better style and can lead to more code reuse.This pattern is used in several places in the standard library. For example, see hvcat_fill in abstractarray.jl, or the fill! function, which we could have used instead of writing our own fill_twos!.Functions like strange_twos occur when dealing with data of uncertain type, for example data loaded from an input file that might contain either integers, floats, strings, or something else."
},

{
    "location": "manual/performance-tips/#Types-with-values-as-parameters-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Types with values-as-parameters",
    "category": "section",
    "text": "Let\'s say you want to create an N-dimensional array that has size 3 along each axis.  Such arrays can be created like this:julia> A = fill(5.0, (3, 3))\n3×3 Array{Float64,2}:\n 5.0  5.0  5.0\n 5.0  5.0  5.0\n 5.0  5.0  5.0This approach works very well: the compiler can figure out that A is an Array{Float64,2} because it knows the type of the fill value (5.0::Float64) and the dimensionality ((3, 3)::NTuple{2,Int}). This implies that the compiler can generate very efficient code for any future usage of A in the same function.But now let\'s say you want to write a function that creates a 3×3×... array in arbitrary dimensions; you might be tempted to write a functionjulia> function array3(fillval, N)\n           fill(fillval, ntuple(d->3, N))\n       end\narray3 (generic function with 1 method)\n\njulia> array3(5.0, 2)\n3×3 Array{Float64,2}:\n 5.0  5.0  5.0\n 5.0  5.0  5.0\n 5.0  5.0  5.0This works, but (as you can verify for yourself using @code_warntype array3(5.0, 2)) the problem is that the output type cannot be inferred: the argument N is a value of type Int, and type-inference does not (and cannot) predict its value in advance. This means that code using the output of this function has to be conservative, checking the type on each access of A; such code will be very slow.Now, one very good way to solve such problems is by using the function-barrier technique. However, in some cases you might want to eliminate the type-instability altogether.  In such cases, one approach is to pass the dimensionality as a parameter, for example through Val{T} (see \"Value types\"):julia> function array3(fillval, ::Type{Val{N}}) where N\n           fill(fillval, ntuple(d->3, Val{N}))\n       end\narray3 (generic function with 1 method)\n\njulia> array3(5.0, Val{2})\n3×3 Array{Float64,2}:\n 5.0  5.0  5.0\n 5.0  5.0  5.0\n 5.0  5.0  5.0Julia has a specialized version of ntuple that accepts a Val{::Int} as the second parameter; by passing N as a type-parameter, you make its \"value\" known to the compiler. Consequently, this version of array3 allows the compiler to predict the return type.However, making use of such techniques can be surprisingly subtle. For example, it would be of no help if you called array3 from a function like this:function call_array3(fillval, n)\n    A = array3(fillval, Val{n})\nendHere, you\'ve created the same problem all over again: the compiler can\'t guess the type of n, so it doesn\'t know the type of Val{n}.  Attempting to use Val, but doing so incorrectly, can easily make performance worse in many situations.  (Only in situations where you\'re effectively combining Val with the function-barrier trick, to make the kernel function more efficient, should code like the above be used.)An example of correct usage of Val would be:function filter3(A::AbstractArray{T,N}) where {T,N}\n    kernel = array3(1, Val{N})\n    filter(A, kernel)\nendIn this example, N is passed as a parameter, so its \"value\" is known to the compiler.  Essentially, Val{T} works only when T is either hard-coded (Val{3}) or already specified in the type-domain."
},

{
    "location": "manual/performance-tips/#The-dangers-of-abusing-multiple-dispatch-(aka,-more-on-types-with-values-as-parameters)-1",
    "page": "效能建議 (Performance Tips)",
    "title": "The dangers of abusing multiple dispatch (aka, more on types with values-as-parameters)",
    "category": "section",
    "text": "Once one learns to appreciate multiple dispatch, there\'s an understandable tendency to go crazy and try to use it for everything. For example, you might imagine using it to store information, e.g.struct Car{Make,Model}\n    year::Int\n    ...more fields...\nendand then dispatch on objects like Car{:Honda,:Accord}(year, args...).This might be worthwhile when the following are true:You require CPU-intensive processing on each Car, and it becomes vastly more efficient if you know the Make and Model at compile time.\nYou have homogenous lists of the same type of Car to process, so that you can store them all in an Array{Car{:Honda,:Accord},N}.When the latter holds, a function processing such a homogenous array can be productively specialized: Julia knows the type of each element in advance (all objects in the container have the same concrete type), so Julia can \"look up\" the correct method calls when the function is being compiled (obviating the need to check at run-time) and thereby emit efficient code for processing the whole list.When these do not hold, then it\'s likely that you\'ll get no benefit; worse, the resulting \"combinatorial explosion of types\" will be counterproductive.  If items[i+1] has a different type than item[i], Julia has to look up the type at run-time, search for the appropriate method in method tables, decide (via type intersection) which one matches, determine whether it has been JIT-compiled yet (and do so if not), and then make the call. In essence, you\'re asking the full type- system and JIT-compilation machinery to basically execute the equivalent of a switch statement or dictionary lookup in your own code.Some run-time benchmarks comparing (1) type dispatch, (2) dictionary lookup, and (3) a \"switch\" statement can be found on the mailing list.Perhaps even worse than the run-time impact is the compile-time impact: Julia will compile specialized functions for each different Car{Make, Model}; if you have hundreds or thousands of such types, then every function that accepts such an object as a parameter (from a custom get_year function you might write yourself, to the generic push! function in the standard library) will have hundreds or thousands of variants compiled for it.  Each of these increases the size of the cache of compiled code, the length of internal lists of methods, etc.  Excess enthusiasm for values-as-parameters can easily waste enormous resources."
},

{
    "location": "manual/performance-tips/#Access-arrays-in-memory-order,-along-columns-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Access arrays in memory order, along columns",
    "category": "section",
    "text": "Multidimensional arrays in Julia are stored in column-major order. This means that arrays are stacked one column at a time. This can be verified using the vec function or the syntax [:] as shown below (notice that the array is ordered [1 3 2 4], not [1 2 3 4]):julia> x = [1 2; 3 4]\n2×2 Array{Int64,2}:\n 1  2\n 3  4\n\njulia> x[:]\n4-element Array{Int64,1}:\n 1\n 3\n 2\n 4This convention for ordering arrays is common in many languages like Fortran, Matlab, and R (to name a few). The alternative to column-major ordering is row-major ordering, which is the convention adopted by C and Python (numpy) among other languages. Remembering the ordering of arrays can have significant performance effects when looping over arrays. A rule of thumb to keep in mind is that with column-major arrays, the first index changes most rapidly. Essentially this means that looping will be faster if the inner-most loop index is the first to appear in a slice expression.Consider the following contrived example. Imagine we wanted to write a function that accepts a Vector and returns a square Matrix with either the rows or the columns filled with copies of the input vector. Assume that it is not important whether rows or columns are filled with these copies (perhaps the rest of the code can be easily adapted accordingly). We could conceivably do this in at least four ways (in addition to the recommended call to the built-in repmat()):function copy_cols(x::Vector{T}) where T\n    n = size(x, 1)\n    out = Array{T}(n, n)\n    for i = 1:n\n        out[:, i] = x\n    end\n    out\nend\n\nfunction copy_rows(x::Vector{T}) where T\n    n = size(x, 1)\n    out = Array{T}(n, n)\n    for i = 1:n\n        out[i, :] = x\n    end\n    out\nend\n\nfunction copy_col_row(x::Vector{T}) where T\n    n = size(x, 1)\n    out = Array{T}(n, n)\n    for col = 1:n, row = 1:n\n        out[row, col] = x[row]\n    end\n    out\nend\n\nfunction copy_row_col(x::Vector{T}) where T\n    n = size(x, 1)\n    out = Array{T}(n, n)\n    for row = 1:n, col = 1:n\n        out[row, col] = x[col]\n    end\n    out\nendNow we will time each of these functions using the same random 10000 by 1 input vector:julia> x = randn(10000);\n\njulia> fmt(f) = println(rpad(string(f)*\": \", 14, \' \'), @elapsed f(x))\n\njulia> map(fmt, Any[copy_cols, copy_rows, copy_col_row, copy_row_col]);\ncopy_cols:    0.331706323\ncopy_rows:    1.799009911\ncopy_col_row: 0.415630047\ncopy_row_col: 1.721531501Notice that copy_cols is much faster than copy_rows. This is expected because copy_cols respects the column-based memory layout of the Matrix and fills it one column at a time. Additionally, copy_col_row is much faster than copy_row_col because it follows our rule of thumb that the first element to appear in a slice expression should be coupled with the inner-most loop."
},

{
    "location": "manual/performance-tips/#Pre-allocating-outputs-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Pre-allocating outputs",
    "category": "section",
    "text": "If your function returns an Array or some other complex type, it may have to allocate memory.  Unfortunately, oftentimes allocation and its converse, garbage collection, are substantial bottlenecks.Sometimes you can circumvent the need to allocate memory on each function call by preallocating the output.  As a trivial example, comparefunction xinc(x)\n    return [x, x+1, x+2]\nend\n\nfunction loopinc()\n    y = 0\n    for i = 1:10^7\n        ret = xinc(i)\n        y += ret[2]\n    end\n    y\nendwithfunction xinc!(ret::AbstractVector{T}, x::T) where T\n    ret[1] = x\n    ret[2] = x+1\n    ret[3] = x+2\n    nothing\nend\n\nfunction loopinc_prealloc()\n    ret = Array{Int}(3)\n    y = 0\n    for i = 1:10^7\n        xinc!(ret, i)\n        y += ret[2]\n    end\n    y\nendTiming results:julia> @time loopinc()\n  0.529894 seconds (40.00 M allocations: 1.490 GiB, 12.14% gc time)\n50000015000000\n\njulia> @time loopinc_prealloc()\n  0.030850 seconds (6 allocations: 288 bytes)\n50000015000000Preallocation has other advantages, for example by allowing the caller to control the \"output\" type from an algorithm.  In the example above, we could have passed a SubArray rather than an Array, had we so desired.Taken to its extreme, pre-allocation can make your code uglier, so performance measurements and some judgment may be required. However, for \"vectorized\" (element-wise) functions, the convenient syntax x .= f.(y) can be used for in-place operations with fused loops and no temporary arrays (see the dot syntax for vectorizing functions)."
},

{
    "location": "manual/performance-tips/#More-dots:-Fuse-vectorized-operations-1",
    "page": "效能建議 (Performance Tips)",
    "title": "More dots: Fuse vectorized operations",
    "category": "section",
    "text": "Julia has a special dot syntax that converts any scalar function into a \"vectorized\" function call, and any operator into a \"vectorized\" operator, with the special property that nested \"dot calls\" are fusing: they are combined at the syntax level into a single loop, without allocating temporary arrays. If you use .= and similar assignment operators, the result can also be stored in-place in a pre-allocated array (see above).In a linear-algebra context, this means that even though operations like vector + vector and vector * scalar are defined, it can be advantageous to instead use vector .+ vector and vector .* scalar because the resulting loops can be fused with surrounding computations. For example, consider the two functions:f(x) = 3x.^2 + 4x + 7x.^3\n\nfdot(x) = @. 3x^2 + 4x + 7x^3 # equivalent to 3 .* x.^2 .+ 4 .* x .+ 7 .* x.^3Both f and fdot compute the same thing.  However, fdot (defined with the help of the @. macro) is significantly faster when applied to an array:julia> x = rand(10^6);\n\njulia> @time f(x);\n  0.010986 seconds (18 allocations: 53.406 MiB, 11.45% gc time)\n\njulia> @time fdot(x);\n  0.003470 seconds (6 allocations: 7.630 MiB)\n\njulia> @time f.(x);\n  0.003297 seconds (30 allocations: 7.631 MiB)That is, fdot(x) is three times faster and allocates 1/7 the memory of f(x), because each * and + operation in f(x) allocates a new temporary array and executes in a separate loop. (Of course, if you just do f.(x) then it is as fast as fdot(x) in this example, but in many contexts it is more convenient to just sprinkle some dots in your expressions rather than defining a separate function for each vectorized operation.)"
},

{
    "location": "manual/performance-tips/#Consider-using-views-for-slices-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Consider using views for slices",
    "category": "section",
    "text": "In Julia, an array \"slice\" expression like array[1:5, :] creates a copy of that data (except on the left-hand side of an assignment, where array[1:5, :] = ... assigns in-place to that portion of array). If you are doing many operations on the slice, this can be good for performance because it is more efficient to work with a smaller contiguous copy than it would be to index into the original array. On the other hand, if you are just doing a few simple operations on the slice, the cost of the allocation and copy operations can be substantial.An alternative is to create a \"view\" of the array, which is an array object (a SubArray) that actually references the data of the original array in-place, without making a copy.  (If you write to a view, it modifies the original array\'s data as well.) This can be done for individual slices by calling view(), or more simply for a whole expression or block of code by putting @views in front of that expression.  For example:julia> fcopy(x) = sum(x[2:end-1])\n\njulia> @views fview(x) = sum(x[2:end-1])\n\njulia> x = rand(10^6);\n\njulia> @time fcopy(x);\n  0.003051 seconds (7 allocations: 7.630 MB)\n\njulia> @time fview(x);\n  0.001020 seconds (6 allocations: 224 bytes)Notice both the 3× speedup and the decreased memory allocation of the fview version of the function."
},

{
    "location": "manual/performance-tips/#Avoid-string-interpolation-for-I/O-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Avoid string interpolation for I/O",
    "category": "section",
    "text": "When writing data to a file (or other I/O device), forming extra intermediate strings is a source of overhead. Instead of:println(file, \"$a $b\")use:println(file, a, \" \", b)The first version of the code forms a string, then writes it to the file, while the second version writes values directly to the file. Also notice that in some cases string interpolation can be harder to read. Consider:println(file, \"$(f(a))$(f(b))\")versus:println(file, f(a), f(b))"
},

{
    "location": "manual/performance-tips/#Optimize-network-I/O-during-parallel-execution-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Optimize network I/O during parallel execution",
    "category": "section",
    "text": "When executing a remote function in parallel:responses = Vector{Any}(nworkers())\n@sync begin\n    for (idx, pid) in enumerate(workers())\n        @async responses[idx] = remotecall_fetch(pid, foo, args...)\n    end\nendis faster than:refs = Vector{Any}(nworkers())\nfor (idx, pid) in enumerate(workers())\n    refs[idx] = @spawnat pid foo(args...)\nend\nresponses = [fetch(r) for r in refs]The former results in a single network round-trip to every worker, while the latter results in two network calls - first by the @spawnat and the second due to the fetch (or even a wait). The fetch/wait is also being executed serially resulting in an overall poorer performance."
},

{
    "location": "manual/performance-tips/#Fix-deprecation-warnings-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Fix deprecation warnings",
    "category": "section",
    "text": "A deprecated function internally performs a lookup in order to print a relevant warning only once. This extra lookup can cause a significant slowdown, so all uses of deprecated functions should be modified as suggested by the warnings."
},

{
    "location": "manual/performance-tips/#Tweaks-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Tweaks",
    "category": "section",
    "text": "These are some minor points that might help in tight inner loops.Avoid unnecessary arrays. For example, instead of sum([x,y,z]) use x+y+z.\nUse abs2(z) instead of abs(z)^2 for complex z. In general, try to rewrite code to use abs2() instead of abs() for complex arguments.\nUse div(x,y) for truncating division of integers instead of trunc(x/y), fld(x,y) instead of floor(x/y), and cld(x,y) instead of ceil(x/y)."
},

{
    "location": "manual/performance-tips/#Performance-Annotations-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Performance Annotations",
    "category": "section",
    "text": "Sometimes you can enable better optimization by promising certain program properties.Use @inbounds to eliminate array bounds checking within expressions. Be certain before doing this. If the subscripts are ever out of bounds, you may suffer crashes or silent corruption.\nUse @fastmath to allow floating point optimizations that are correct for real numbers, but lead to differences for IEEE numbers. Be careful when doing this, as this may change numerical results. This corresponds to the -ffast-math option of clang.\nWrite @simd in front of for loops that are amenable to vectorization. This feature is experimental and could change or disappear in future versions of Julia.Note: While @simd needs to be placed directly in front of a loop, both @inbounds and @fastmath can be applied to several statements at once, e.g. using begin ... end, or even to a whole function.Here is an example with both @inbounds and @simd markup:function inner(x, y)\n    s = zero(eltype(x))\n    for i=1:length(x)\n        @inbounds s += x[i]*y[i]\n    end\n    s\nend\n\nfunction innersimd(x, y)\n    s = zero(eltype(x))\n    @simd for i=1:length(x)\n        @inbounds s += x[i]*y[i]\n    end\n    s\nend\n\nfunction timeit(n, reps)\n    x = rand(Float32,n)\n    y = rand(Float32,n)\n    s = zero(Float64)\n    time = @elapsed for j in 1:reps\n        s+=inner(x,y)\n    end\n    println(\"GFlop/sec        = \",2.0*n*reps/time*1E-9)\n    time = @elapsed for j in 1:reps\n        s+=innersimd(x,y)\n    end\n    println(\"GFlop/sec (SIMD) = \",2.0*n*reps/time*1E-9)\nend\n\ntimeit(1000,1000)On a computer with a 2.4GHz Intel Core i5 processor, this produces:GFlop/sec        = 1.9467069505224963\nGFlop/sec (SIMD) = 17.578554163920018(GFlop/sec measures the performance, and larger numbers are better.) The range for a @simd for loop should be a one-dimensional range. A variable used for accumulating, such as s in the example, is called a reduction variable. By using @simd, you are asserting several properties of the loop:It is safe to execute iterations in arbitrary or overlapping order, with special consideration for reduction variables.\nFloating-point operations on reduction variables can be reordered, possibly causing different results than without @simd.\nNo iteration ever waits on another iteration to make forward progress.A loop containing break, continue, or @goto will cause a compile-time error.Using @simd merely gives the compiler license to vectorize. Whether it actually does so depends on the compiler. To actually benefit from the current implementation, your loop should have the following additional properties:The loop must be an innermost loop.\nThe loop body must be straight-line code. This is why @inbounds is currently needed for all array accesses. The compiler can sometimes turn short &&, ||, and ?: expressions into straight-line code, if it is safe to evaluate all operands unconditionally. Consider using ifelse() instead of ?: in the loop if it is safe to do so.\nAccesses must have a stride pattern and cannot be \"gathers\" (random-index reads) or \"scatters\" (random-index writes).\nThe stride should be unit stride.\nIn some simple cases, for example with 2-3 arrays accessed in a loop, the LLVM auto-vectorization may kick in automatically, leading to no further speedup with @simd.Here is an example with all three kinds of markup. This program first calculates the finite difference of a one-dimensional array, and then evaluates the L2-norm of the result:function init!(u)\n    n = length(u)\n    dx = 1.0 / (n-1)\n    @fastmath @inbounds @simd for i in 1:n\n        u[i] = sin(2pi*dx*i)\n    end\nend\n\nfunction deriv!(u, du)\n    n = length(u)\n    dx = 1.0 / (n-1)\n    @fastmath @inbounds du[1] = (u[2] - u[1]) / dx\n    @fastmath @inbounds @simd for i in 2:n-1\n        du[i] = (u[i+1] - u[i-1]) / (2*dx)\n    end\n    @fastmath @inbounds du[n] = (u[n] - u[n-1]) / dx\nend\n\nfunction norm(u)\n    n = length(u)\n    T = eltype(u)\n    s = zero(T)\n    @fastmath @inbounds @simd for i in 1:n\n        s += u[i]^2\n    end\n    @fastmath @inbounds return sqrt(s/n)\nend\n\nfunction main()\n    n = 2000\n    u = Array{Float64}(n)\n    init!(u)\n    du = similar(u)\n\n    deriv!(u, du)\n    nu = norm(du)\n\n    @time for i in 1:10^6\n        deriv!(u, du)\n        nu = norm(du)\n    end\n\n    println(nu)\nend\n\nmain()On a computer with a 2.7 GHz Intel Core i7 processor, this produces:$ julia wave.jl;\nelapsed time: 1.207814709 seconds (0 bytes allocated)\n\n$ julia --math-mode=ieee wave.jl;\nelapsed time: 4.487083643 seconds (0 bytes allocated)Here, the option --math-mode=ieee disables the @fastmath macro, so that we can compare results.In this case, the speedup due to @fastmath is a factor of about 3.7. This is unusually large – in general, the speedup will be smaller. (In this particular example, the working set of the benchmark is small enough to fit into the L1 cache of the processor, so that memory access latency does not play a role, and computing time is dominated by CPU usage. In many real world programs this is not the case.) Also, in this case this optimization does not change the result – in general, the result will be slightly different. In some cases, especially for numerically unstable algorithms, the result can be very different.The annotation @fastmath re-arranges floating point expressions, e.g. changing the order of evaluation, or assuming that certain special cases (inf, nan) cannot occur. In this case (and on this particular computer), the main difference is that the expression 1 / (2*dx) in the function deriv is hoisted out of the loop (i.e. calculated outside the loop), as if one had written idx = 1 / (2*dx). In the loop, the expression ... / (2*dx) then becomes ... * idx, which is much faster to evaluate. Of course, both the actual optimization that is applied by the compiler as well as the resulting speedup depend very much on the hardware. You can examine the change in generated code by using Julia\'s code_native() function."
},

{
    "location": "manual/performance-tips/#Treat-Subnormal-Numbers-as-Zeros-1",
    "page": "效能建議 (Performance Tips)",
    "title": "Treat Subnormal Numbers as Zeros",
    "category": "section",
    "text": "Subnormal numbers, formerly called denormal numbers, are useful in many contexts, but incur a performance penalty on some hardware. A call set_zero_subnormals(true) grants permission for floating-point operations to treat subnormal inputs or outputs as zeros, which may improve performance on some hardware. A call set_zero_subnormals(false) enforces strict IEEE behavior for subnormal numbers.Below is an example where subnormals noticeably impact performance on some hardware:function timestep(b::Vector{T}, a::Vector{T}, Δt::T) where T\n    @assert length(a)==length(b)\n    n = length(b)\n    b[1] = 1                            # Boundary condition\n    for i=2:n-1\n        b[i] = a[i] + (a[i-1] - T(2)*a[i] + a[i+1]) * Δt\n    end\n    b[n] = 0                            # Boundary condition\nend\n\nfunction heatflow(a::Vector{T}, nstep::Integer) where T\n    b = similar(a)\n    for t=1:div(nstep,2)                # Assume nstep is even\n        timestep(b,a,T(0.1))\n        timestep(a,b,T(0.1))\n    end\nend\n\nheatflow(zeros(Float32,10),2)           # Force compilation\nfor trial=1:6\n    a = zeros(Float32,1000)\n    set_zero_subnormals(iseven(trial))  # Odd trials use strict IEEE arithmetic\n    @time heatflow(a,1000)\nendThis example generates many subnormal numbers because the values in a become an exponentially decreasing curve, which slowly flattens out over time.Treating subnormals as zeros should be used with caution, because doing so breaks some identities, such as x-y == 0 implies x == y:julia> x = 3f-38; y = 2f-38;\n\njulia> set_zero_subnormals(true); (x - y, x == y)\n(0.0f0, false)\n\njulia> set_zero_subnormals(false); (x - y, x == y)\n(1.0000001f-38, false)In some applications, an alternative to zeroing subnormal numbers is to inject a tiny bit of noise.  For example, instead of initializing a with zeros, initialize it with:a = rand(Float32,1000) * 1.f-9"
},

{
    "location": "manual/performance-tips/#man-code-warntype-1",
    "page": "效能建議 (Performance Tips)",
    "title": "@code_warntype",
    "category": "section",
    "text": "The macro @code_warntype (or its function variant code_warntype()) can sometimes be helpful in diagnosing type-related problems. Here\'s an example:pos(x) = x < 0 ? 0 : x\n\nfunction f(x)\n    y = pos(x)\n    sin(y*x+1)\nend\n\njulia> @code_warntype f(3.2)\nVariables:\n  #self#::#f\n  x::Float64\n  y::UNION{FLOAT64,INT64}\n  fy::Float64\n  #temp#@_5::UNION{FLOAT64,INT64}\n  #temp#@_6::Core.MethodInstance\n  #temp#@_7::Float64\n\nBody:\n  begin\n      $(Expr(:inbounds, false))\n      # meta: location REPL[1] pos 1\n      # meta: location float.jl < 487\n      fy::Float64 = (Core.typeassert)((Base.sitofp)(Float64,0)::Float64,Float64)::Float64\n      # meta: pop location\n      unless (Base.or_int)((Base.lt_float)(x::Float64,fy::Float64)::Bool,(Base.and_int)((Base.and_int)((Base.eq_float)(x::Float64,fy::Float64)::Bool,(Base.lt_float)(fy::Float64,9.223372036854776e18)::Bool)::Bool,(Base.slt_int)((Base.fptosi)(Int64,fy::Float64)::Int64,0)::Bool)::Bool)::Bool goto 9\n      #temp#@_5::UNION{FLOAT64,INT64} = 0\n      goto 11\n      9:\n      #temp#@_5::UNION{FLOAT64,INT64} = x::Float64\n      11:\n      # meta: pop location\n      $(Expr(:inbounds, :pop))\n      y::UNION{FLOAT64,INT64} = #temp#@_5::UNION{FLOAT64,INT64} # line 3:\n      unless (y::UNION{FLOAT64,INT64} isa Int64)::ANY goto 19\n      #temp#@_6::Core.MethodInstance = MethodInstance for *(::Int64, ::Float64)\n      goto 28\n      19:\n      unless (y::UNION{FLOAT64,INT64} isa Float64)::ANY goto 23\n      #temp#@_6::Core.MethodInstance = MethodInstance for *(::Float64, ::Float64)\n      goto 28\n      23:\n      goto 25\n      25:\n      #temp#@_7::Float64 = (y::UNION{FLOAT64,INT64} * x::Float64)::Float64\n      goto 30\n      28:\n      #temp#@_7::Float64 = $(Expr(:invoke, :(#temp#@_6), :(Main.*), :(y), :(x)))\n      30:\n      return $(Expr(:invoke, MethodInstance for sin(::Float64), :(Main.sin), :((Base.add_float)(#temp#@_7,(Base.sitofp)(Float64,1)::Float64)::Float64)))\n  end::Float64Interpreting the output of @code_warntype, like that of its cousins @code_lowered, @code_typed, @code_llvm, and @code_native, takes a little practice. Your code is being presented in form that has been partially digested on its way to generating compiled machine code.  Most of the expressions are annotated by a type, indicated by the ::T (where T might be Float64, for example). The most important characteristic of @code_warntype is that non-concrete types are displayed in red; in the above example, such output is shown in all-caps.The top part of the output summarizes the type information for the different variables internal to the function. You can see that y, one of the variables you created, is a Union{Int64,Float64}, due to the type-instability of pos.  There is another variable, _var4, which you can see also has the same type.The next lines represent the body of f. The lines starting with a number followed by a colon (1:, 2:) are labels, and represent targets for jumps (via goto) in your code.  Looking at the body, you can see that pos has been inlined into f–everything before 2: comes from code defined in pos.Starting at 2:, the variable y is defined, and again annotated as a Union type.  Next, we see that the compiler created the temporary variable _var1 to hold the result of y*x. Because a Float64 times either an Int64 or Float64 yields a Float64, all type-instability ends here. The net result is that f(x::Float64) will not be type-unstable in its output, even if some of the intermediate computations are type-unstable.How you use this information is up to you. Obviously, it would be far and away best to fix pos to be type-stable: if you did so, all of the variables in f would be concrete, and its performance would be optimal.  However, there are circumstances where this kind of ephemeral type instability might not matter too much: for example, if pos is never used in isolation, the fact that f\'s output is type-stable (for Float64 inputs) will shield later code from the propagating effects of type instability.  This is particularly relevant in cases where fixing the type instability is difficult or impossible: for example, currently it\'s not possible to infer the return type of an anonymous function.  In such cases, the tips above (e.g., adding type annotations and/or breaking up functions) are your best tools to contain the \"damage\" from type instability.The following examples may help you interpret expressions marked as containing non-leaf types:Function body ending in end::Union{T1,T2})\nInterpretation: function with unstable return type\nSuggestion: make the return value type-stable, even if you have to annotate it\nf(x::T)::Union{T1,T2}\nInterpretation: call to a type-unstable function\nSuggestion: fix the function, or if necessary annotate the return value\n(top(arrayref))(A::Array{Any,1},1)::Any\nInterpretation: accessing elements of poorly-typed arrays\nSuggestion: use arrays with better-defined types, or if necessary annotate the type of individual element accesses\n(top(getfield))(A::ArrayContainer{Float64},:data)::Array{Float64,N}\nInterpretation: getting a field that is of non-leaf type. In this case, ArrayContainer had a field data::Array{T}. But Array needs the dimension N, too, to be a concrete type.\nSuggestion: use concrete types like Array{T,3} or Array{T,N}, where N is now a parameter of ArrayContainer"
},

{
    "location": "manual/style-guide/#",
    "page": "程式風格指引 (Style Guide)",
    "title": "程式風格指引 (Style Guide)",
    "category": "page",
    "text": ""
},

{
    "location": "manual/style-guide/#man-style-guide-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "程式風格指引 (Style Guide)",
    "category": "section",
    "text": "接下來的章節會解釋一些Julia程式風格中慣用語的一些面向。沒有任何一條規則是絕對的；他們只是一些建議，協助你自己熟悉這個語言，也協助你挑選設計的替代方案。"
},

{
    "location": "manual/style-guide/#撰寫函式，而不只是腳本（scripts）-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "撰寫函式，而不只是腳本（scripts）",
    "category": "section",
    "text": "一步一步的撰寫top level code是開始解決問題一個快速的方法，但你應該嘗試盡力將程式拆解成很多的函式。函式可以更好的被重新利用與測試，他可以釐清哪些步驟已經被執行，而他們的輸入與輸出是什麼。再者，在函式中的程式碼傾向跑的比top level code快，這取決於Julia編譯器如何運作。要再一次強調，函式應該要採用參數裡的值，而不是直接操作全域變數（除了常數以外，像pi）。"
},

{
    "location": "manual/style-guide/#避免撰寫過度專一的型別-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "避免撰寫過度專一的型別",
    "category": "section",
    "text": "程式碼應該愈泛用愈好。而不是撰寫：convert(Complex{Float64}, x)比較好的作法是使用泛用函式：complex(float(x))第二個版本會將x轉成適當的型別，並非一直是同一種型別。這則指引是特別關於函式參數。例如，若是他可以是任意整數，請勿宣告參數型別為Int或Int32，使用抽象型別Integer更為恰當。事實上，很多時候你可以省略所有的參數型別，除非需要區分不同方法的定義，如果傳遞的型別不支援方法中任何必要的操作，自然會拋出MethodError。（這被稱為鴨子定型 duck typing）。舉例，考慮以下函式定義，addone會回傳參數值加一：addone(x::Int) = x + 1                 # works only for Int\naddone(x::Integer) = x + one(x)    # any integer type\naddone(x::Number) = x + one(x)     # any numeric type\naddone(x) = x + one(x)             # any type supporting + and oneunit最後的addone定義會被one（one會回傳跟x型別相同的1，這樣可以避免無謂的向上轉型）以及+函式處理，他們支援任意的參數型別。重要的是，要理解如果只定義廣義的addone(x) = x + one(x)是沒有效能懲罰的，因為Julia會根據需求自動編譯特定的版本。舉例像是，當你第一次呼叫addone(12)時，Julia會自動編譯一個特別給x::Int參數的addone函式，呼叫中的one會被取代為他的值1。因此，當有第四個定義時，前三個addone定義是完全的冗餘。"
},

{
    "location": "manual/style-guide/#呼叫方處理超出範圍的參數-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "呼叫方處理超出範圍的參數",
    "category": "section",
    "text": "不要寫：function foo(x, y)\n    x = Int(x); y = Int(y)\n    ...\nend\nfoo(x, y)請使用：function foo(x::Int, y::Int)\n    ...\nend\nfoo(Int(x), Int(y))這是較好的風格，foo並不是真的接受所有的數字型別；他只接受Int。這邊有個議題是，一個函式天生就需要整數，可能強制呼叫方決定非整數值該如何被轉換，會是比較好的作法（e.g. floor或是ceiling）。另一個議題是，宣告更特定的型別可以為以後方法的定義上留下更多空間。"
},

{
    "location": "manual/style-guide/#如果函式會修改到參數的值，在函式名稱之後加上!-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "如果函式會修改到參數的值，在函式名稱之後加上!",
    "category": "section",
    "text": "不要寫：function double(a::AbstractArray{<:Number})\n    for i = 1:endof(a)\n        a[i] *= 2\n    end\n    return a\nend請使用：function double!(a::AbstractArray{<:Number})\n    for i = 1:endof(a)\n        a[i] *= 2\n    end\n    return a\nendJulia標準程式庫普遍使用這樣的慣例，標準程式庫中也包含了拷貝形式跟修改形式的函式範例(e.g., sort()與sort!())，還有一些只有修改形式(e.g., push!(), pop!(), splice!())。為了方便，這樣的函式回傳修改過的陣列，也是很典型的例子。"
},

{
    "location": "manual/style-guide/#避免不可思議的Union型別-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "避免不可思議的Union型別",
    "category": "section",
    "text": "像是Union{Function,AbstractString}的型別常常意味著一些設計上可以更單純。"
},

{
    "location": "manual/style-guide/#避免在field中使用Union型別-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "避免在field中使用Union型別",
    "category": "section",
    "text": "當創造一個型別時：mutable struct MyType\n    ...\n    x::Union{Void,T}\nend詢問x是不是nothing（其型別是Void）是非常重要的。這裡有些其他的事項需要考慮：尋求一個安全的預設值來初始化x\n引進另一個不需要x的型別\n如果有很多跟x相似的field，將他們存在一個字典中\n決定一個簡單的規則來確認x是不是nothing。舉例來說，通常一個field一開始會是nothing 但會在一個明確的地方做初始化。在那個例子中，是讓他一開始維持未定義。\n如果一個x真的需要在某些時候不被賦值，定義他為::Nullable{T}，當程式存取這個field時，符合了型別穩定性（見Nullable types）。"
},

{
    "location": "manual/style-guide/#避免詳盡描述容器型別-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "避免詳盡描述容器型別",
    "category": "section",
    "text": "像以下方式建構一個陣列通常沒多大的幫助：a = Array{Union{Int,AbstractString,Tuple,Array}}(n)在這個例子中，Array{Any}(n)是更好的。標註特定的使用範圍是對編譯器更有幫助的（e.g. a[i]::Int），比起試圖打包多種替代型別到一個型別中。"
},

{
    "location": "manual/style-guide/#使用與Juliabase/一致的命名慣例-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "使用與Juliabase/一致的命名慣例",
    "category": "section",
    "text": "模組跟型別命名開頭大寫，並使用駝峰式命名法： module SparseArrays, struct UnitRange.\n函式開頭小寫 (maximum(), convert())，當不影響可讀性時，多個字連接在一起 (isequal(), haskey())。 必要時，使用底線將字分開。 底線也用來暗示兩個概念的結合 (remotecall_fetch() 為fetch(remotecall(...))更加簡便的實作) 或是作為修飾 (sum_kbn())。\n簡潔是有價值的，但請避免縮寫（使用indexin()比indxin()好），當一個字變得難以記憶是否或是如何被縮寫。如果一個函式需要多個字，考慮他可能代表多於一個概念，可能將他拆成多個片段比較好。"
},

{
    "location": "manual/style-guide/#不要過度使用try-catch-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "不要過度使用try-catch",
    "category": "section",
    "text": "避免error比起依賴捕捉他們來的好。"
},

{
    "location": "manual/style-guide/#別將條件式括弧起來-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "別將條件式括弧起來",
    "category": "section",
    "text": "Julia不需要在if與while中將條件括弧起來。請寫：if a == b而不是：if (a == b)"
},

{
    "location": "manual/style-guide/#不要過度使用...-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "不要過度使用...",
    "category": "section",
    "text": "切割函式參數可能會上癮。不要使用[a..., b...]，而是使用簡單的[a; b]，他會串接陣列。collect(a)比[a...]更好，但如果a已經是iterable，常常更好的選擇會是不要理他，而不必要把他轉換成陣列。"
},

{
    "location": "manual/style-guide/#不要使用不必要的靜態參數-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "不要使用不必要的靜態參數",
    "category": "section",
    "text": "函式簽名：foo(x::T) where {T<:Real} = ...應該寫成：foo(x::Real) = ...特別是，如果T在函式內部沒有使用到。即使T有被使用到，方便的話，可以被取代為typeof(x)。他在效能上是沒有差別的。要注意的是，這不是對一般靜態參數的警示，只是他們被用在不需要的地方。還有一點值得注意，容器型別可能特別需要函式中的參數型別。可以看FAQ 避免Avoid fields with abstract containers以取得更多資訊。"
},

{
    "location": "manual/style-guide/#避免混淆實例與型別-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "避免混淆實例與型別",
    "category": "section",
    "text": "像以下一系列的定義可能會使人困惑：foo(::Type{MyType}) = ...\nfoo(::MyType) = foo(MyType)Decide whether the concept in question will be written as MyType or MyType(), and stick to it.The preferred style is to use instances by default, and only add methods involving Type{MyType} later if they become necessary to solve some problem.If a type is effectively an enumeration, it should be defined as a single (ideally immutable struct or primitive) type, with the enumeration values being instances of it. Constructors and conversions can check whether values are valid. This design is preferred over making the enumeration an abstract type, with the \"values\" as subtypes."
},

{
    "location": "manual/style-guide/#不要過度使用macros-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "不要過度使用macros",
    "category": "section",
    "text": "Be aware of when a macro could really be a function instead.Calling eval() inside a macro is a particularly dangerous warning sign; it means the macro will only work when called at the top level. If such a macro is written as a function instead, it will naturally have access to the run-time values it needs."
},

{
    "location": "manual/style-guide/#不要在介面上暴露不安全的操作-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "不要在介面上暴露不安全的操作",
    "category": "section",
    "text": "If you have a type that uses a native pointer:mutable struct NativeType\n    p::Ptr{UInt8}\n    ...\nenddon\'t write definitions like the following:getindex(x::NativeType, i) = unsafe_load(x.p, i)The problem is that users of this type can write x[i] without realizing that the operation is unsafe, and then be susceptible to memory bugs.Such a function should either check the operation to ensure it is safe, or have unsafe somewhere in its name to alert callers."
},

{
    "location": "manual/style-guide/#不要重載基本容器型別的方法-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "不要重載基本容器型別的方法",
    "category": "section",
    "text": "撰寫以下定義是可能的：show(io::IO, v::Vector{MyType}) = ...這會提供向量承載的特定新型別一個客製化呈現。這固然吸引人，卻是需要避免的。這會造成麻煩，使用者會期待一個已知的型別，像Vector()，做出特定的行為，過度的客製化它的行為會導致它更難以運作。"
},

{
    "location": "manual/style-guide/#避免type-piracy-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "避免type piracy",
    "category": "section",
    "text": "\"Type piracy\"指的是實際延伸或是重新定義Base或是其他套件中的方法到你尚未定義的型別上。某些狀況下，你可以免除type piracy，只有少數不良效應。然而，在極端的狀況，你甚至會使Julia崩潰(e.g. 如果你的延伸或是重新定義導致無法輸入並傳給ccall)。 Type piracy會使程式碼的推論惡化（reasoning about code），也可能引進不相容，這些是難以預測跟診斷的。舉例，假設模組中你想要在symbols上定義乘法：module A\nimport Base.*\n*(x::Symbol, y::Symbol) = Symbol(x,y)\nendThe problem is that now any other module that uses Base.* will also see this definition. Since Symbol is defined in Base and is used by other modules, this can change the behavior of unrelated code unexpectedly. There are several alternatives here, including using a different function name, or wrapping the Symbols in another type that you define.Sometimes, coupled packages may engage in type piracy to separate features from definitions, especially when the packages were designed by collaborating authors, and when the definitions are reusable. For example, one package might provide some types useful for working with colors; another package could define methods for those types that enable conversions between color spaces. Another example might be a package that acts as a thin wrapper for some C code, which another package might then pirate to implement a higher-level, Julia-friendly API."
},

{
    "location": "manual/style-guide/#要小心型別的等價性-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "要小心型別的等價性",
    "category": "section",
    "text": "大家一般喜歡用isa()跟<: (issubtype())來測試型別，而非==。檢查型別的等價性一般只有跟已知的具體型別比較是對的。(e.g. T == Float64)，或是你真的真的知道你自己在做什麼。"
},

{
    "location": "manual/style-guide/#不要寫x-f(x)-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "不要寫x->f(x)",
    "category": "section",
    "text": "由於高階函式常常呼叫匿名函式，這幾乎是必要的。不過任何函式都可以不用包裝成匿名函式直接作為參數傳送。不要寫map(x->f(x), a)，請使用map(f, a)."
},

{
    "location": "manual/style-guide/#Avoid-using-floats-for-numeric-literals-in-generic-code-when-possible-1",
    "page": "程式風格指引 (Style Guide)",
    "title": "Avoid using floats for numeric literals in generic code when possible",
    "category": "section",
    "text": "If you write generic code which handles numbers, and which can be expected to run with many different numeric type arguments, try using literals of a numeric type that will affect the arguments as little as possible through promotion.For example,julia> f(x) = 2.0 * x\nf (generic function with 1 method)\n\njulia> f(1//2)\n1.0\n\njulia> f(1/2)\n1.0\n\njulia> f(1)\n2.0whilejulia> g(x) = 2 * x\ng (generic function with 1 method)\n\njulia> g(1//2)\n1//1\n\njulia> g(1/2)\n1.0\n\njulia> g(1)\n2As you can see, the second version, where we used an Int literal, preserved the type of the input argument, while the first didn\'t. This is because e.g. promote_type(Int, Float64) == Float64, and promotion happens with the multiplication. Similarly, Rational literals are less type disruptive than Float64 literals, but more disruptive than Ints:julia> h(x) = 2//1 * x\nh (generic function with 1 method)\n\njulia> h(1//2)\n1//1\n\njulia> h(1/2)\n1.0\n\njulia> h(1)\n2//1Thus, use Int literals when possible, with Rational{Int} for literal non-integer numbers, in order to make it easier to use your code."
},

]}
