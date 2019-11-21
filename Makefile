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
		--build-arg GITHUB_TOKEN=${GITHUB_TOKEN} \
		--target publish \
		--tag octopus . \
		&& docker run -it octopus

remove:
	docker rm website