.PHONY: app monitoring fluent

app:
	docker-compose -f app.yml build node && docker-compose -f app.yml up -d node
fluent:
	docker-compose -f monitoring.yml build fluentd && docker-compose -f monitoring.yml up -d 
	
