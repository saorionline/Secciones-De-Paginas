# This is the code that displays all the items inside navigation

```javascript
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
```          

# What if I dont need to hide the hamburger logo, I dont need the list display in the first view

This is the Hamburger ico 

```javascript 
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
```
The other change is in this line, from hidden to none

```javascript
<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg">
```