start-dev:
	docker-compose up -d
	echo "Waiting services to setup"
	docker logs -f ts-graphql-sample

stop-dev:
	echo "Stopping services"
	docker-compose down -v

restart-dev:
	$(MAKE) stop-dev
	$(MAKE) start-dev

build-dev:
	docker-compose build
