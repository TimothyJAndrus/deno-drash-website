<script>
export const resource = {
  paths: [
    "/advanced-tutorials/content-negotiation/user-profiles",
    "/advanced-tutorials/content-negotiation/user-profiles/introduction",
  ],
  meta: {
    title: "Content Negotation",
    subtitle: "Introduction",
    source_code_uri: "/advanced_tutorials/content_negotiation/user_profiles"
  }
}

export default {
  data() {
    return {
      uri: "/advanced-tutorials/content-negotiation/user-profiles"
    };
  }
}
</script>

<template lang="pug">
page-tutorial-part(
  :introduction="true",
  :part="-1"
  :parts="4",
  :uri="uri"
)
  div.row
    div.col
      hr
      h2-hash Overview
      p-advanced-tutorials-introduction
      p In this tutorial series, you will learn how to implement <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation" target="_BLANK">content negotation</a> in a Drash server. You will learn how to make a Drash server serve different representations of a resource. For simplicity, the only two representations this tutorial will cover are <code>application/json</code> and <code>text/html</code>. However, this tutorial will set your resource up in a way that will allow you to add more representations.
      p The resource you will be creating is a users resource. It will contain data about users and will be able to display a single user's data as a profile card in HTML or as JSON. The client (your browser in this case) will decide what representation to receive.
      p-view-source-code
      p.text-center(style="margin-bottom: 0")
        a.btn.btn-success(:href="$conf.base_url + '/#/advanced-tutorials/content-negotiation/user-profiles/part-1'") Get Started
  div.row
    div.col
      hr
      h2-hash End State
      p Below are samples of what you will create.
      p
        img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/content_negotiation/user_profiles/part_5/verification_2.png'")
      p
        img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/content_negotiation/user_profiles/part_4/verification_3_json.png'")
</template>
