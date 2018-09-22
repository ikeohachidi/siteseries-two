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
                <img src="images/chidi.png"/>
                <p>$30</p>
                <p>Lorem Ipsum - dolor palat</p>
                <p>deoch</p>
              </div>
              <div class="single-product">
                <img src="images/chidi.png"/>
                <p>$30</p>
                <p>Lorem Ipsum - dolor palat</p>
                <p>deoch</p>
              </div>
            </div>

            <div class="subdiv-product">
              <div class="single-product">
                <img src="images/chidi.png"/>
                <p>$30</p>
                <p>Lorem Ipsum - dolor palat</p>
                <p>deoch</p>
              </div>
              <div class="single-product">
                <img src="images/chidi.png"/>
                <p>$30</p>
                <p>Lorem Ipsum - dolor palat</p>
                <p>deoch</p>
              </div>
            </div>
          </div>

          <div class="single-product">
            <img src="images/chidi.png"/>
            <p>$30</p>
            <p>Lorem Ipsum - dolor palat</p>
            <p>deoch</p>
          </div>
        </div>
      </div>
    </div>
  `
})

const Extra = Vue.component('Extra', {
  template: `
    <div class="extra container">
      <div class="row">
        <div>
          <p>Lorem ipsum</p>
          <h2>Lorem Ipsum</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,</br> necessitatibus maiores. Aperiam, eveniet, voluptatem repudiandae </br>consequatur mollitia quasi eos dolorem architecto a eaque natus! Magnam nihil</p>
          <button>Lorem ipsum</button>
        </div>
        <div>
          <img src="images/chidi.png"/>
        </div>
      </div>
    </div>
  `
})

const Newsletter = Vue.component('Newsletter', {
  template: `
    <div class="newsletter container">
      <div class="row">
        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
        <input type="text" placeholder="Your Email Address please"/> <button>sign up</button>
      </div>
    </div>
  `
})

let app = new Vue({
  el: '#app',
  components: {
    Navbar,
    Landing,
    Product,
    Extra,
    Newsletter
  }
})