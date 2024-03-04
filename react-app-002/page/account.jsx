import '../layouts/css/sign_up.css'
export default function Account(){
    return <>
    <section id="accmain">
        <header>
            <p>Sign up so you don't miss out on special offers</p>
            <hr/>
        </header>
        <article class="art-info">
                Create your account and stay up to date with <strong>all</strong>the offers. Come to the community too!
                If you don't already have an account on <strong>ZeroTwoShop</strong>, here you can create one.
                Fill in the form with your data, and then go to your favorite products.
        </article>
        <article class="art-input">
            <div class="div-input1">
                <input type="text" placeholder="Surname"/>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Password"/>
                <input type="text" placeholder="Phone"/>
                <input type="text" placeholder="City"/>
            </div>
            <div class="div-input2">
                <span>Benefits of having an account:</span>
                <p>You will benefit from quick access to the products</p>
                <p>You get an order history</p>
                <p>Get discounts on the orders you will make</p>
                    <button>Registration</button>
                    <button>Login</button>
            </div>
        </article>
    </section>
    </>
}