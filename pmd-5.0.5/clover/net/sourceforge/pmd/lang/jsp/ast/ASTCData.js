var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":21724,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTCData","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_371":{"methods":[{"sl":10}],"name":"testCData","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [371], [371], [], [], [], [], [], [], [], [], [], []]
