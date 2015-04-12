dev:
	npm run dev

build:
	webpack --config webpack.config.js

serve: build
	npm run serve
