all:
	@echo "Choose one of the following options:"
	@echo "<make runFirst>		for recursiveFibo	!"
	@echo "<make runSecond>	for memoroziedFibo	!"
	@echo "<make runThird>		for iterativeFibo	!"

runFirst: recursiveFibo.c
	@echo "running recursiveFibo"
	@gcc recursiveFibo.c -o recursiveFibo
	@./recursiveFibo

runSecond: memorizationFibo.c
	@echo "running memoroziedFibo"
	@gcc memorizationFibo.c -o memorizationFibo
	@./memorizationFibo


runThird: iterativeFibo.c
	@echo "running iterativeFibo"
	@gcc iterativeFibo.c -o iterativeFibo
	@./iterativeFibo

clean:
	rm -rf recursiveFibo memorizationFibo iterativeFibo	


