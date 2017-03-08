FROM fluent/fluentd:onbuild
USER root
RUN apk add --update --virtual .build-deps \
sudo build-base ruby-dev 
RUN sudo -u fluent gem install \
	fluent-plugin-elasticsearch
RUN sudo -u fluent gem sources --clear-all \
&& apk del .build-deps \
&& rm -rf /var/cache/apk/* \
/home/fluent/.gem/ruby/2.3.0/cache/*.gem

USER fluent
EXPOSE 24284

