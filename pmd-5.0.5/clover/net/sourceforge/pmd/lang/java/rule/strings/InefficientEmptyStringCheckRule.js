var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":49,"id":18354,"methods":[{"el":43,"sc":5,"sl":33},{"el":47,"sc":5,"sl":45}],"name":"InefficientEmptyStringCheckRule","sl":24}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_456":{"methods":[{"sl":33},{"sl":45}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":34},{"sl":36},{"sl":37},{"sl":42},{"sl":46}]},"test_77":{"methods":[{"sl":33},{"sl":45}],"name":"testPmdOptions","pass":true,"statements":[{"sl":34},{"sl":42},{"sl":46}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [456, 77], [456, 77], [], [456], [456], [], [], [], [], [456, 77], [], [], [456, 77], [456, 77], [], [], []]
