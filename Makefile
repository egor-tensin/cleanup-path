include prelude.mk

.PHONY: kek
kek:
	echo "$$git_status" | grep -E -q --invert-match "($$allowed)"

.PHONY: maintenance
maintenance:
	npm update

	@git_status="$$( git status --porcelain=v1 )" && \
	allowed='^ M node_modules/|^ M package-lock.json$$' && \
	if [ -z "$$git_status" ]; then \
		true; \
	elif ! echo "$$git_status" | grep -E -q --invert-match "($$allowed)"; then \
		git commit -am 'bump dependencies' && \
			git push -q; \
	else \
		echo; \
		echo '-----------------------------------------------------------------'; \
		echo 'Error: unrecognized modifications in the repository:'; \
		echo "$$git_status"; \
		echo '-----------------------------------------------------------------'; \
		exit 1; \
	fi
