var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":60,"id":35260,"methods":[{"el":27,"sc":5,"sl":18},{"el":35,"sc":5,"sl":29},{"el":40,"sc":5,"sl":37},{"el":59,"sc":5,"sl":57}],"name":"MethodScopeTest","sl":16}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_122":{"methods":[{"sl":29}],"name":"testMethodName","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34}]},"test_273":{"methods":[{"sl":18}],"name":"testMethodParameterOccurrenceRecorded","pass":true,"statements":[{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":25},{"sl":26}]},"test_325":{"methods":[{"sl":37}],"name":"testGenerics","pass":true,"statements":[{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [273], [], [273], [273], [273], [273], [273], [273], [273], [], [], [122], [], [122], [122], [122], [122], [], [], [325], [], [325], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
