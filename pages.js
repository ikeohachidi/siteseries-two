const Navbar = Vue.component('Navbar', {
  template: `
    <div>
      <div class="navbar container">
        <div class="row">
          <ul>
            <li><input type="text" placeholder="Search"></li>
            <li id="logo">Lorem Ipsum</li>
            <li class="user-btn">User</li>
            <li class="user-btn">Cart</li>
          </ul>
          <ul class="nav-buttons">
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
      </div>
    </div>
  `
})

const Landing = Vue.component('Landing', {
  template: `
    <div class="landing container">
      <div class="row">
        <p>Lorem ipsum 2013</p>
        <h1>Lorem ipsum dolor elit</br>
          solor palat miri deuche</h1>
        <button>lorem ipsum</button>
      </div>
    </div>
  `
})

const Product = Vue.component('Product', {
  template:  `
    <div class="product container">
      <div class="row">
        <h3>Lorem ipsu dolor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</br>Quisquam, necessitatibus maiores</p>
        <div class="all-product">

          <div class="hold-subdiv-product"> 
            <div class="subdiv-product">
              <div class="single-product">
                <p>$30</p>
                <p>Lorem Ipsum - dolor palat</p>
                <p>deoch</p>
              </div>
              <div class="single-product">
                <p>$30</p>
                <p>Lorem Ipsum - dolor palat</p>
                <p>deoch</p>
              </div>
            </div>

            <div class="subdiv-product">
              <div class="single-product">
                <p>$30</p>
                <p>Lorem Ipsum - dolor palat</p>
                <p>deoch</p>
              </div>
              <div class="single-product">
                <p>$30</p>
                <p>Lorem Ipsum - dolor palat</p>
                <p>deoch</p>
              </div>
            </div>
          </div>

          <div class="single-product">
            <p>$30</p>
              <p>Lorem Ipsum - dolor palat</p>
              <p>deoch</p>
          </div>
        </div>
      </div>
    </div>
  `
})

let app = new Vue({
  el: '#app',
  components: {
    Navbar,
    Landing,
    Product
  }
})