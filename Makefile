start:
	docker-compose -f docker-compose.yml up --build

test:
	docker build \
		--target test \
		--tag octopus .

lint:
	docker build \
		--target lint \
		--tag octopus .

publish:
	docker build \
		--build-arg NPM_TOKEN=${NPM_TOKEN} \
		--target publish \
		--tag octopus . \
		&& docker run octopus

deploy-static:
	docker build \
		--build-arg NOW_TOKEN=${NOW_TOKEN} \
		--target deploy-static \
		--tag octopus . \
		&& docker run octopus

remove:
	docker rm website