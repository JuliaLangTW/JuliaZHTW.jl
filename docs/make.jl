using Documenter


# manual/unicode-input.md
download("http://www.unicode.org/Public/9.0.0/ucd/UnicodeData.txt", joinpath(@__DIR__, "UnicodeData.txt"))

makedocs(
    clean = true,
    doctest = false, # TODO: Fix doctest
    sitename="Julia Taiwan 中文文件",
    pages = [
        "首頁" => "index.md",
        "手冊" => [
            "入門（Getting Started）" => "manual/getting-started.md",
            "變數（Variables）" => "manual/variables.md",
            "整數與浮點數（Integers and Floating-Point Numbers）" => "manual/integers-and-floating-point-numbers.md",
            "數學運算與初等函式（Mathematical Operations and Elementary Functions）" => "manual/mathematical-operations.md",
            "複數與有理數（Complex and Rational Numbers）" => "manual/complex-and-rational-numbers.md",
            "字串（Strings）" => "manual/strings.md",
            "函式（Functions）" => "manual/functions.md",
            "控制流程（Control Flow）" => "manual/control-flow.md",
            "變數作用域（Scope of Variables）" => "manual/variables-and-scoping.md",
            "型別（Types）" => "manual/types.md",
            "方法（Methods）" => "manual/methods.md",
            "建構子（Constructors）" => "manual/constructors.md",
            "轉型與向上轉型（Conversion and Promotion）" => "manual/conversion-and-promotion.md",
            "介面（Interfaces）" => "manual/interfaces.md",
            "模組（Modules）" => "manual/modules.md",
            "文件（Documentation）" => "manual/documentation.md",
            "Metaprogramming" => "manual/metaprogramming.md",
            "多維陣列（Multi-dimensional Arrays）" => "manual/arrays.md",
            "遺失值（Missing Values）" => "manual/missing.md",
            "網路與串流（Networking and Streams）" => "manual/networking-and-streams.md",
            "平行運算（Parallel Computing）" => "manual/parallel-computing.md",
            "執行外部程式（Running External Programs）" => "manual/running-external-programs.md",
            "呼叫 C 與 Fortran 程式（Calling C and Fortran Code）" => "manual/calling-c-and-fortran-code.md",
            "處理作業系統差異（Handling Operating System Variation）" => "manual/handling-operating-system-variation.md",
            "環境變數（Environment Variables）" => "manual/environment-variables.md",
            "嵌入式 Julia（Embedding Julia）" => "manual/embedding.md",
            "程式碼載入（Code Loading）" => "manual/code-loading.md",
            "效能剖析（Profiling）" => "manual/profile.md",
            "Stack Traces" => "manual/stacktraces.md",
            "效能建議（Performance Tips）" => "manual/performance-tips.md",
            "工作流程建議（Workflow Tips）" => "manual/workflow-tips.md",
            "程式風格指引（Style Guide）" => "manual/style-guide.md",
            "常見問題（Frequently Asked Questions）" => "manual/faq.md",
            "與其他語言的差異（Noteworthy Differences from other Languages）" => "manual/noteworthy-differences.md",
            "Unicode 輸入（Unicode Input）" => "manual/unicode-input.md",
        ],
        "Base" => [
        ],
        "標準程式庫" => [
        ],
        "開發者手冊" => [
        ],
    ],
    Documenter.HTML(
        prettyurls = !("local" in ARGS),
        canonical = "https://julialangtw.github.io/JuliaZHTW.jl/latest/",
    ),
    assets = ["assets/favicon.ico"],
)

if "deploy" in ARGS
deploydocs(
    repo = "github.com/JuliaLangTW/JuliaZHTW.jl.git",
)
end
