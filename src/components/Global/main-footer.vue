<template>
    <div>
      <div class="content">
      </div>
        <footer id="main-footer">
            <div class="container-fluid">
                <div class="row text-center">
                    <div class="col-lg-12">
                        <h3>GET IN TOUCH.</h3>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <p>Address Line 1</p>
                        <p>Address Line 2</p>
                        <p>Address Line 3</p>
                    </div>
                    <div class="col-md-4">
                        <font-awesome-icon icon="coffee" />
                    </div>
                    <div class="col-md-4">
                        <p>Name here</p>
                        <p>Email Here</p>
                        <p>Mobile Here</p>
                    </div>
                </div>
                <iframe id="map-container" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.485804690362!2d174.76276731529143!3d-36.85478897993737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e5d0e974d9%3A0xd83592c310724072!2sStudio+38!5e0!3m2!1sen!2snz!4v1530531293577"></iframe>
            </div>
            <!-- Insert Copyright Here -->
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~scss/styles";

#main-footer {
    width: 100%;
    background-color: $studioblue;
    padding-top: 50px;
    // nested styles
    #main-footer .row {
        margin: 0 85px;
    }
    #main-footer .container {
        width: auto;
    }
}

#map-container {
    height: 240px;
    width: 100%;
    margin-top: 30px;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
}

.content {
    flex: 1 0 auto;
    -webkit-flex: 1 0 auto;
    min-height: 200px;
}

#main-footer {
    color: white;
    flex: 0 0 auto;
    -webkit-flex: 1 0 auto;
}

</style>
