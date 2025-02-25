run:
	rm -rf dist
	pnpm exec tsc
	for f in dist/*.js; do \
		echo "$f:"; \
		pnpm exec node "$f"; \
	done
