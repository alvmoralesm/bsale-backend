<p align="center">
  <a href="" rel="noopener">
 <img style="background-color: #ff5c1a; border-radius: 5px; "  src="https://dojiw2m9tvv09.cloudfront.net/4/8/img-logos-logo-bsale-blanco-mobile.png?2904" alt="Project logo"></a>
</p>
<h3 align="center">bsale-backend</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-done-success.svg)]()

</div>

---

<p align="center"> Endpoint developed to work in conjunction with the bsale-frontend app. You can see the repo for the app <a href="https://github.com/alvmoralesm/bsale-frontend">here.</a>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Prerequisites](#prerequisites)
- [Final steps](#final-steps)
- [Usage](#usage)
- [Deployed](#deployed)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This endpoint was developed as part of BSale the hiring process.

## 🏁 Getting Started <a name = "getting_started"></a>

To start, you'll need to clone the repo and install the dependencies.

```
git clone https://github.com/alvmoralesm/bsale-backend.git
```

```
npm i
```

## Prerequisites <a name = "prerequisites"></a>

The only requirement is that you need to have installed <a href="https://nodejs.org/en/">Node.js</a> in your local machine.

## Final steps <a name = "final-steps"></a>

As final steps we'll need to setup our environment variables. First wel'll need to create our .env file that'll contain our environment variables. Lastly, we insert the variables in the file that we just created. The environment variables are the following:

<ol>
<li>DBHOST = insert db host here</li> 
<li>DBUSER = insert db user here</li>
<li>DBPW = insert db password here</li>
<li>DBNAME = insert db name here</li>
<li>API_URL = /api/v1</li>
</ol>

After setting up the variables we can run our project with the following command:

```
npm start
```

## 🎈 Usage <a name="usage"></a>

This API has calls to the Product and Category tables:

<h4>Product<h4>

<div>
<p style="font-weight: bold; font-size: 2.5vh; background-color: #eee; display: inline;">GET request:</p>
</div>
</br>
<p style="font-weight: normal; font-size: 2.2vh">All products = /api/v1/products/</p>

```
[
    {
        "id": 104,
        "name": "ABSOLUT",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/absolut21381.png",
        "price": 8990,
        "discount": 30,
        "category": 7
    },
    {
        "id": 68,
        "name": "Bebida Sprite 1 Lt",
        "url_image": null,
        "price": 1250,
        "discount": 10,
        "category": 4
    },
    {
        "id": 98,
        "name": "Cerveza Escudo Normal LATA 350CC",
        "url_image": "",
        "price": 600,
        "discount": 0,
        "category": 6
    },
    {
        "id": 99,
        "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
        "url_image": "",
        "price": 800,
        "discount": 0,
        "category": 6
    },
    {
        "id": 58,
        "name": "COCA COLA LIGHT DESECHABLE",
        "url_image": null,
        "price": 1500,
        "discount": 0,
        "category": 4
    },
    ...
]
```

<p style="font-weight: normal; font-size: 2.2vh">Product by id = /api/v1/products/:id/</p>

```
[
    {
        "id": 5,
        "name": "ENERGETICA MR BIG",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
        "price": 1490,
        "discount": 20,
        "category": 1
    }
]
```

<div>
<p style="font-weight: bold; font-size: 2.5vh; background-color: #eee; display: inline;">POST request:</p>
</div>
</br>
<p style="font-weight: normal; font-size: 2.2vh">Search products = /api/v1/products/search/</p>

<p style="font-weight: normal; font-size: 2.2vh">Here we need to pass the following JSON structure as body parameters:</p>

```
{
    "searchValue": string,
    "categoryId": number
}
```

<p style="font-weight: bold; font-size: 2.2vh">*The categoryId is not a must. You only pass it if you need to search products from a determined category. If you omit the categoryId, it will return a global search of products.</p>

<p style="font-weight: normal; font-size: 2.2vh">Let's make an example call searching with the following parameters: {"searchValue" : "sprite", "categoryId" : 4} </p>

```
[
    {
        "id": 68,
        "name": "Bebida Sprite 1 Lt",
        "url_image": null,
        "price": 1250,
        "discount": 10,
        "category": 4
    },
    {
        "id": 48,
        "name": "SPRITE 1 1/2 Lts",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/sprite-lata-33cl5575.jpg",
        "price": 1500,
        "discount": 0,
        "category": 4
    },
    {
        "id": 50,
        "name": "SPRITE 2 Lt",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/sprite-2lt4365.jpg",
        "price": 1800,
        "discount": 0,
        "category": 4
    }
]
```

<h4>Category<h4>

<div>
<p style="font-weight: bold; font-size: 2.5vh; background-color: #eee; display: inline;">GET request:</p>
</div>
</br>
<p style="font-weight: normal; font-size: 2.2vh">All categories = /api/v1/categories/</p>

```
[
    {
        "id": 4,
        "name": "bebida"
    },
    {
        "id": 1,
        "name": "bebida energetica"
    },
    {
        "id": 6,
        "name": "cerveza"
    },
    {
        "id": 2,
        "name": "pisco"
    },
    {
        "id": 3,
        "name": "ron"
    },
    {
        "id": 5,
        "name": "snack"
    },
    {
        "id": 7,
        "name": "vodka"
    }
]
```

<p style="font-weight: normal; font-size: 2.2vh">Category by id = /api/v1/categories/:id/</p>

```
[
    {
        "id": 1,
        "name": "bebida energetica"
    }
]
```

<p style="font-weight: normal; font-size: 2.2vh">Get all products by category = /api/v1/categories/:id/products/</p>

```
[
    {
        "id": 68,
        "name": "Bebida Sprite 1 Lt",
        "url_image": null,
        "price": 1250,
        "discount": 10,
        "category": 4
    },
    {
        "id": 58,
        "name": "COCA COLA LIGHT DESECHABLE",
        "url_image": null,
        "price": 1500,
        "discount": 0,
        "category": 4
    },
    {
        "id": 57,
        "name": "COCA COLA NORMAL DESECHABLE 1500cc",
        "url_image": null,
        "price": 1500,
        "discount": 0,
        "category": 4
    },
    {
        "id": 37,
        "name": "COCA COLA ZERO DESECHABLE",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/cocazero9766.jpg",
        "price": 1490,
        "discount": 0,
        "category": 4
    },
    {
        "id": 52,
        "name": "Fanta",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/fanta_2lt5236.jpg",
        "price": 1500,
        "discount": 0,
        "category": 4
    },
    {
        "id": 48,
        "name": "SPRITE 1 1/2 Lts",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/sprite-lata-33cl5575.jpg",
        "price": 1500,
        "discount": 0,
        "category": 4
    },
    {
        "id": 50,
        "name": "SPRITE 2 Lt",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/sprite-2lt4365.jpg",
        "price": 1800,
        "discount": 0,
        "category": 4
    }
]
```

## Deployed <a name = "deployed"></a>

<p style="font-weight: normal; font-size: 2.2vh">This API was deployed using <a href="https://www.heroku.com/">Heroku</a> you can access the deployed API using the following link <a href="https://www.heroku.com/">https://bsale-api-am.herokuapp.com/</a>. Remember to pass the parameters to the URL for the requests as specified in the Usage section.</p>

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [&Aacute;lvaro Morales](https://github.com/alvmoralesm)
