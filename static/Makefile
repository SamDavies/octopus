deploy-static:
	docker build \
		--build-arg NOW_TOKEN=${NOW_TOKEN} \
		--tag octopus-static . \
		&& docker run octopus-static

remove:
	docker rm octopus-static
