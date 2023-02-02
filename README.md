# nx-angular-standalone

Note: this project is following the Nx angular standalone [tutorial](https://nx.dev/angular-standalone-tutorial). They provide a very good and detailed explanation, including a [live demo](https://www.youtube.com/watch?time_continue=1&v=LYPVrWQNnEc&source_ve_path=MzY4NDI&feature=emb_logo).

This is just a summary of the steps:

## Step 1: generate code

### Create a workspace

```terminal
npx create-nx-workspace@latest
```

Application name will be the "project" 

### Generate a component

```terminal
npx nx g @nrwl/angular:component shop --project=store
```

Note:

### Generate libraries

```terminal
npx nx g @nrwl/angular:library cart
```

```terminal
npx nx g @nrwl/angular:lib shared/ui --buildable
```

## Step 2: Project graph

```terminal
npx nx graph
```

Allows you to visualize the dependencies.

If not referenced in code, they won't show

```js
import { SharedUiModule } from '@store/shared/ui';
...
imports: [
    BrowserModule,
    SharedUiModule,
    RouterModule.forRoot([
      {
        path: 'cart',
        loadChildren: () => import('@store/cart').then((m) => m.CartModule),
      },
      {
        path: '**',
        component: ShopComponent,
      },
    ]),
  ],
```

Add an exported component `banner` to use in store

```terminal
npx nx g @nrwl/angular:component banner --project=shared-ui --export
```

Add a `cart-route` component to the `cart` project:
```terminal
npx nx g @nrwl/angular:component cart-route --project=cart
```

Create routing inside cart project

```js
imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartRouteComponent,
      },
    ]),
  ],
```

Show the shared `banner` in `cart-route`

```html
<store-banner text="Welcome to the cart." ></store-banner>
<a routerLink="/">Continue Shopping</a>
```

## Step 3: running tasks

`nx` targets are defined in `project.json` 


```json
 "targets": {
    "build": {
      "executor": "@nrwl/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/{projectRoot}"],
      "options": {
        "project": "shared/ui/ng-package.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "shared/ui/tsconfig.lib.prod.json"
        },
        "development": {
          "tsConfig": "shared/ui/tsconfig.lib.json"
        }
      },
      "defaultConfiguration": "production"
    },
```

The properties inside each of these these targets is defined as follows:

- executor - which Nx executor to run. The syntax here is: <plugin name>:<executor name>
- outputs - this is an array of files that would be created by running this target. (This informs Nx on what to save for it's caching mechanisms you'll learn about in 4 - Task Pipelines).
- options - this is an object defining which executor options to use for the given target. Every Nx executor allows for options as a way to parameterize it's functionality.

### Running a task

running tests

```terminal
npx nx test shared-ui
```

running lint

```terminal
npx nx lint shared-ui
```

## Step 4 task pipelines

How to build the project

```terminal
npx nx build store
```

Once executed once, the output is cached, if nothing changes in a project, it will just use the cached result

### run against only affected

```terminal
npx nx affected:graph
```

```terminal
npx nx affected --target=test
```