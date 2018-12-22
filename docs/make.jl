# Install dependencies needed to build the documentation.
empty!(LOAD_PATH)
push!(LOAD_PATH, @__DIR__, "@stdlib")
empty!(DEPOT_PATH)
pushfirst!(DEPOT_PATH, joinpath(@__DIR__, "deps"))
using Pkg
Pkg.instantiate()

using Documenter

# make links for stdlib package docs, this is needed until #522 in Documenter.jl is finished
symlink_q(tgt, link) = isfile(link) || symlink(tgt, link)
cp_q(src, dest) = isfile(dest) || cp(src, dest)

const STDLIB_DOCS = []
const STDLIB_DIR = Sys.STDLIB
const EXT_STDLIB_DOCS = ["Pkg"]
cd(joinpath(@__DIR__, "src")) do
    Base.rm("stdlib"; recursive=true, force=true)
    mkdir("stdlib")
    for dir in readdir(STDLIB_DIR)
        sourcefile = joinpath(STDLIB_DIR, dir, "docs", "src")
        if dir in EXT_STDLIB_DOCS
            sourcefile = joinpath(sourcefile, "basedocs.md")
        else
            sourcefile = joinpath(sourcefile, "index.md")
        end
        if isfile(sourcefile)
            targetfile = joinpath("stdlib", dir * ".md")
            push!(STDLIB_DOCS, (stdlib = Symbol(dir), targetfile = targetfile))
            if Sys.iswindows()
                cp_q(sourcefile, targetfile)
            else
                symlink_q(sourcefile, targetfile)
            end
        end
    end
end

for stdlib in STDLIB_DOCS
    @eval using $(stdlib.stdlib)
end

# manual/unicode-input.md
download("http://www.unicode.org/Public/9.0.0/ucd/UnicodeData.txt", joinpath(@__DIR__, "UnicodeData.txt"))

makedocs(
    modules   = [Base, Core, [Base.root_module(Base, stdlib.stdlib) for stdlib in STDLIB_DOCS]...],
    clean = true,
    doctest = false, # TODO: Fix doctest
    sitename="Julia Taiwan 中文文件",
    pages = [
        "首頁" => "index.md",
        "手冊" => [
            "manual/getting-started.md",
            "manual/variables.md",
            "manual/integers-and-floating-point-numbers.md",
            "manual/mathematical-operations.md",
            "manual/complex-and-rational-numbers.md",
            "manual/strings.md",
            "manual/functions.md",
            "manual/control-flow.md",
            "manual/variables-and-scoping.md",
            "manual/types.md",
            "manual/methods.md",
            "manual/constructors.md",
            "manual/conversion-and-promotion.md",
            "manual/interfaces.md",
            "manual/modules.md",
            "manual/documentation.md",
            "manual/metaprogramming.md",
            "manual/arrays.md",
            "manual/missing.md",
            "manual/networking-and-streams.md",
            "manual/parallel-computing.md",
            "manual/running-external-programs.md",
            "manual/calling-c-and-fortran-code.md",
            "manual/handling-operating-system-variation.md",
            "manual/environment-variables.md",
            "manual/embedding.md",
            "manual/code-loading.md",
            "manual/profile.md",
            "manual/stacktraces.md",
            "manual/performance-tips.md",
            "manual/workflow-tips.md",
            "manual/style-guide.md",
            "manual/faq.md",
            "manual/noteworthy-differences.md",
            "manual/unicode-input.md",
        ],
        "Base" => [
            "base/base.md",
            "base/collections.md",
            "base/math.md",
            "base/numbers.md",
            "base/strings.md",
            "base/arrays.md",
            "base/parallel.md",
            "base/multi-threading.md",
            "base/constants.md",
            "base/file.md",
            "base/io-network.md",
            "base/punctuation.md",
            "base/sort.md",
            "base/iterators.md",
            "base/c.md",
            "base/libc.md",
            "base/stacktraces.md",
            "base/simd-types.md",
        ],
        "標準程式庫" => 
            [stdlib.targetfile for stdlib in STDLIB_DOCS],
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
