var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":28,"id":8304,"methods":[{"el":11,"sc":5,"sl":9},{"el":19,"sc":5,"sl":16},{"el":23,"sc":5,"sl":21},{"el":27,"sc":5,"sl":25}],"name":"ASTElementGet","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_404":{"methods":[{"sl":9},{"sl":16},{"sl":21},{"sl":25}],"name":"testArrayAccess","pass":true,"statements":[{"sl":10},{"sl":18},{"sl":22},{"sl":26}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [404], [404], [], [], [], [], [], [404], [], [404], [], [], [404], [404], [], [], [404], [404], [], []]
