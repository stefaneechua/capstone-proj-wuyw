<template>
<div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">TEST MENU</a>
            </div>
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
        </ul>
        </div>
    </nav>
</div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" scoped>
li, a {
    color: red;
    display: inline;
}
</style>
