<template>
  <title>Cookies Policy | Produce Mart</title>
  <mainHeader/>
  <searchHeader/>
  
  <!--Page Breadcrumb-->
  <section class="resPageBread">
      <div class="container">
          <div class="row">
                <div class="col-lg-12">
                    <div class="textHead">
                        <p class="subhead">Produce Mart</p>
                        <h2>Cookies Policy</h2>
                    </div>
                </div>
          </div>
      </div>
  </section><!--Page Breadcrumb Ends-->

  <!--Resources Content-->
  <main class="resContent">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At libero adipisci vel illum vero possimus dolorem eveniet consectetur voluptatibus tempora. Sint vitae architecto recusandae, aliquam earum, inventore exercitationem, odit iste minima molestias assumenda sit perspiciatis placeat corrupti explicabo tenetur? Adipisci eos, fugiat aperiam voluptate quos aut dignissimos dicta aspernatur at beatae vel neque dolorem. Qui placeat rerum esse veritatis voluptatem? Repellat totam illum, inventore labore culpa excepturi nesciunt quisquam sed. Numquam aspernatur laudantium consequatur impedit vero quaerat laboriosam mollitia ullam dignissimos facilis! Iure ipsam quaerat odio tempore, reprehenderit vitae aut optio labore officiis esse repellendus assumenda quas, iste sed dolorum.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A rerum placeat voluptatibus maiores nostrum similique porro hic vitae officia, dolores unde distinctio omnis ad, iste dolorum eos laboriosam, adipisci voluptatum delectus ipsum deleniti odio nam nulla earum! Quibusdam exercitationem nesciunt non dolore odit id accusamus in voluptatibus nihil corporis placeat at obcaecati, deserunt et nulla nisi dolores facilis reprehenderit asperiores, quaerat eius expedita ex hic ipsa. Doloremque totam eos impedit earum veritatis quam rerum fugiat et. Enim at, repudiandae fugiat nemo accusamus quis eius quam quaerat eos, esse blanditiis culpa. Officia adipisci tenetur et ullam non commodi hic ad! Tempora officia, officiis tempore fugit expedita perspiciatis iure vitae. Tempora autem eum quasi cupiditate repellendus, corrupti voluptas delectus impedit ipsam possimus harum natus illo consectetur nobis, porro eveniet! Cumque vel molestiae deserunt tempore veniam consequuntur vero doloribus nesciunt placeat deleniti qui, assumenda at perferendis sapiente nisi dolorem totam nam dicta enim. Incidunt recusandae ut sunt ullam facilis a est doloribus esse modi facere officia debitis, repellendus error dolorum nobis. Delectus nam modi culpa alias placeat maiores, officiis quaerat iste rerum quam ratione quidem, voluptates possimus fuga explicabo neque laudantium optio ea ab voluptatum aperiam? Amet optio saepe obcaecati eius reiciendis aspernatur.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius iusto ab a harum, corporis repellat quo expedita vitae sit officiis inventore fugit aperiam asperiores dolorum animi culpa libero nemo beatae excepturi necessitatibus, illo sapiente fuga quasi? Numquam, alias eos? Quidem quasi optio suscipit laborum eum sapiente commodi consectetur dolor autem.</p>
              </div>
          </div>
      </div>
  </main>

  <mainFooter/>
</template>
<script>
    import MainHeader from './mainHeader.vue'
    import SearchHeader from './searchHeader.vue'
    import MainFooter from './mainFooter.vue'
    export default {
      name: "Produce Mart",
      components:{
      'mainHeader': MainHeader,
      'searchHeader': SearchHeader,
      'mainFooter': MainFooter,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>