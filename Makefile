MOCHA = ./node_modules/mocha/bin/_mocha
ISTANBUL = ./node_modules/.bin/istanbul
MOCHA_OPTS = -b --timeout 20000 --reporter spec
TESTS_ALL = test/*/*.test.js
TEST_LOCAL_ALL = test/local/*.test.js
TEST_LOCAL_PASS = test/local/pass.test.js
TEST_LOCAL_FAILED = test/local/fail.test.js
TEST_LOCAL_ALLCOVER = test/local/allcover.test.js
TEST_LOCAL_NOFULLCOVER = test/local/nofullcover.test.js
MOCHAWESOME_OPTS = --timeout 20000 --reporter mochawesome

test:
	@echo "Testing..."
	@$(MOCHA) $(MOCHA_OPTS) $(TESTS_ALL)
test-awesome-report:
	@echo "Testing..."
	@$(MOCHA) $(MOCHAWESOME_OPTS) $(TESTS_ALL)
test-cov:
	@echo "Testing..."
	@$(ISTANBUL) cover -- $(MOCHA) $(MOCHAWESOME_OPTS) $(TESTS_ALL)
test-cov-full:
	@echo "Testing..."
	@$(ISTANBUL) cover -- $(MOCHA) $(MOCHAWESOME_OPTS) $(TEST_LOCAL_ALLCOVER)
test-cov-notfull:
	@echo "Testing..."
	@$(ISTANBUL) cover -- $(MOCHA) $(MOCHAWESOME_OPTS) $(TEST_LOCAL_NOFULLCOVER)

.PHONY: all test clean
