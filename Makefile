clean:
	npm run clean

build: clean
	npm run build

dev: build
	npm run dev

test: build
	npm run test

start: build
	npm run start