var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":25,"id":16742,"methods":[{"el":24,"sc":5,"sl":12}],"name":"ImportFromSamePackageRule","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_456":{"methods":[{"sl":12}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":13},{"sl":15},{"sl":16},{"sl":20},{"sl":23}]},"test_77":{"methods":[{"sl":12}],"name":"testPmdOptions","pass":true,"statements":[{"sl":13},{"sl":15},{"sl":20},{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [456, 77], [456, 77], [], [456, 77], [456], [], [], [], [456, 77], [], [], [456, 77], [], []]
