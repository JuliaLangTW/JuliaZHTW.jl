# Julia 台灣社群 中文文件

[原翻譯文件(hackmd)](https://hackmd.io/c/r106dSpkb)

## 安裝依賴

```
julia --project=docs -e "using Pkg; Pkg.instantiate()"
```

## 搬運說明

1. 將 hackmd 中的 markdown 原始碼複製，並在 `docs/src/manual/` 中建立對應的 `.md` 檔
2. 在 `docs/make.jl` 中新增目錄以及對應的 `.md` 檔
3. 在根目錄執行 `julia --project=docs docs/make.jl` 測試編譯，確定沒有 Error 再進行下一步
4. Commit 並 Push

## 文件間參考

可以參考 [docs/src/index.md](docs/src/index.md) 中 `@ref` [docs/src/manual/performance-tips.md](docs/src/manual/performance-tips.md) 的方式

詳細語法參考 Documenter 的 [doc](https://juliadocs.github.io/Documenter.jl/stable/man/syntax/#@ref-link-1)

## 中文文件排版格式

請參考[中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)。

## 專有名詞對照表

翻譯專有名詞時可以先參考既有翻譯，[專有名詞對照表](terminology.md)。

如果覺得有更好的翻譯，可以在 issue 中提出。

## 貢獻者名單

- [Daniel Chen (陳建鳴)](https://github.com/d4n1elchen)
- [Yueh-Hua Tu (杜岳華)](https://github.com/yuehhua)
- [Dboy](https://github.com/dboyliao)
