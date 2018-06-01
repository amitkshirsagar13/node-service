function my_prompt_filter()
    cwd = clink.get_cwd()
    prompt = "\x1b[1;32;40m{cwd}{git}{hg} λ "
    new_value = string.gsub(prompt, "{cwd}", cwd)
    clink.prompt.value = string.gsub(new_value, "{lamb}", "λ")
end

clink.prompt.register_filter(my_prompt_filter, 1)