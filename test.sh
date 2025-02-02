#!/bin/bash

run_ab() {
    local n=$1
    local c=$2

    echo "---------------------"
    echo "n = $n, c = $c"
    echo "---------------------"

    ab -n "$n" -c "$c" http://localhost:5000/ 2>/dev/null | grep -E 'Time taken for tests:|Requests per second:|Time per request:|  99%'
    echo ""
}


ulimit -n 100000

run_ab 100000 10
run_ab 100000 100
run_ab 100000 1000
run_ab 100000 10000
