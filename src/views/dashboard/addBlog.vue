<template>
  <form @submit.prevent="addBlog">
    <label for="title">Title</label>
    <input type="text" name="title" v-model="title" /><br />
    <label for="description">Descriptions</label>
    <ckeditor
      name="description"
      :editor="editor"
      :config="editorConfig"
      cols="30"
      rows="10"
      v-model="description"
    ></ckeditor>
    <!-- <textarea
      name="description"
      id=""
      cols="30"
      rows="10"
      v-model="description"
    ></textarea> -->
    <label for="image">Image</label>
    <input type="file" @change="fileUpload" />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      title: "",
      editor: ClassicEditor,
      editorConfig: {},
      description: "",
      image: "",
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  methods: {
    async addBlog() {
      const fd = new FormData();
      fd.append("title", this.title);
      fd.append("description", this.description);
      fd.append("image", this.image);

      const res = await fetch("https://producemart.herokuapp.com/addBlog", {
        method: "POST",
        headers: {
          Authorization: this.token,
        },
        body: fd,
      });
      const data = await res.json();
      //console.log(data);
    },
    fileUpload(e) {
      this.image = e.target.files[0];
    },
  },
};
</script>

<style></style>
