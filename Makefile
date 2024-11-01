up:
	docker-compose up -d --build

stop:
	docker stop sereda

prune:
	docker system prune \
	&& docker system prune -a

end:
	make stop \
	&& make prune