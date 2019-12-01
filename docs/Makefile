deploy-docs:
	docker build \
		--build-arg NOW_TOKEN=${NOW_TOKEN} \
		--tag octopus-docs . \
		&& docker run octopus-docs

remove:
	docker rm octopus-docs
