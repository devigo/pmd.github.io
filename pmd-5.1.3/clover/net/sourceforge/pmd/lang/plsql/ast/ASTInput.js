var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":25,"id":23860,"methods":[{"el":14,"sc":3,"sl":12},{"el":18,"sc":3,"sl":16},{"el":24,"sc":3,"sl":22}],"name":"ASTInput","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_139":{"methods":[{"sl":16},{"sl":22}],"name":"testWhileStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_293":{"methods":[{"sl":16},{"sl":22}],"name":"testIfStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_384":{"methods":[{"sl":16},{"sl":22}],"name":"testVariableOrConstantDeclaratorParentChildLinks","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_449":{"methods":[{"sl":16},{"sl":22}],"name":"testSimpleCaseStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_502":{"methods":[{"sl":16}],"name":"testBOM","pass":true,"statements":[{"sl":17}]},"test_562":{"methods":[{"sl":16},{"sl":22}],"name":"testForStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_603":{"methods":[{"sl":16}],"name":"testExceptions","pass":true,"statements":[{"sl":17}]},"test_704":{"methods":[{"sl":16},{"sl":22}],"name":"testExpressionParentChildLinks","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_778":{"methods":[{"sl":16},{"sl":22}],"name":"testLabelledStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [603, 139, 384, 502, 778, 293, 562, 449, 704], [603, 139, 384, 502, 778, 293, 562, 449, 704], [], [], [], [], [139, 384, 778, 293, 562, 449, 704], [139, 384, 778, 293, 562, 449, 704], [], [], []]
