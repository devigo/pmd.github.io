var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":96,"id":37239,"methods":[{"el":20,"sc":5,"sl":16},{"el":26,"sc":5,"sl":22},{"el":32,"sc":5,"sl":28},{"el":38,"sc":5,"sl":34},{"el":44,"sc":5,"sl":40},{"el":50,"sc":5,"sl":46},{"el":56,"sc":5,"sl":52},{"el":95,"sc":5,"sl":93}],"name":"ASTLiteralTest","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_356":{"methods":[{"sl":28}],"name":"testIsIntIntLiteral","pass":true,"statements":[{"sl":30},{"sl":31}]},"test_614":{"methods":[{"sl":16}],"name":"testIsStringLiteral","pass":true,"statements":[{"sl":18},{"sl":19}]},"test_637":{"methods":[{"sl":40}],"name":"testIsFloatFloatLiteral","pass":true,"statements":[{"sl":42},{"sl":43}]},"test_728":{"methods":[{"sl":52}],"name":"testIsCharLiteral","pass":true,"statements":[{"sl":54},{"sl":55}]},"test_745":{"methods":[{"sl":34}],"name":"testIsIntLongLiteral","pass":true,"statements":[{"sl":36},{"sl":37}]},"test_83":{"methods":[{"sl":46}],"name":"testIsFloatDoubleLiteral","pass":true,"statements":[{"sl":48},{"sl":49}]},"test_890":{"methods":[{"sl":22}],"name":"testIsNotStringLiteral","pass":true,"statements":[{"sl":24},{"sl":25}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [614], [], [614], [614], [], [], [890], [], [890], [890], [], [], [356], [], [356], [356], [], [], [745], [], [745], [745], [], [], [637], [], [637], [637], [], [], [83], [], [83], [83], [], [], [728], [], [728], [728], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
