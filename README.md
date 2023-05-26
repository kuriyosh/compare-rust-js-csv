# rust-csv と fast-csv の比較

1 行毎にシリアライズする時間を見る

|case|fast-csv|rust-csv|
|34959673 lines/818MB|83.574sec|53.314sec|

ref:

- https://www.alxolr.com/articles/how-to-process-a-csv-file-five-times-faster-in-node-js-with-rust-and-napi-rs
