# HN library ui

### Changelog

### 8.3.2

- Fixing validation for Agreements, adding the validation to the useCheckRequiredInfo hook.

### 8.3.0

- Add agGridActionsCellSuppressKeyboardEvent for accessibility in grids actions columns

### 8.2.1

- Delete min-heith of AgGridHN.module.css

### 8.2.0

- Updating react selecr to 5.8.0

### 8.1.0

- Updating Sentry to 8.33.1

### 8.0.0

- Updating Sentry and Ag-Grid Dependencies

### 7.18.0

- Add Audience Builder to HN Header menu

## 7.17.0

- Removed Sentry.captureMessage function to avoid sending duplicate messages from Mixpanel to the Sentry Dashboard

## 7.16.0

- Added super admin validation for agreements redirection in login

## 7.15.3

- Added Yalc scripts and minnor accesibility changes

## 7.15.2

- Update scopes in menu items

## 7.15.1

- Enable agreements validation in develop environment.

## 7.15.1-beta.2

- Register group id for tenants
- Delete sentryDSN and sentryToken from context manager

## 7.15.1-beta.1

- Disable agreements validation in develop environment.

## 7.15.0

- Send errors in sentry in mixpanel hook and identify user in mixpanel.

## 7.14.0

- Restructuring useMixpanel hook for the AnalyticsToolContextProvider context.

## 7.13.1

- Correction in AnalyticsToolContextProvider context for managing the analytics tool for data tracking.
- Deleting validation of document on useCheckRequiredInfo function

## 7.13.0

- Add the AnalyticsToolContextProvider context for managing the analytics tool for data tracking.

## 7.12.0

- Updated @sentry/nextjs from 8.18.0 to 8.19.0 since the previous version only fix the vulnerability for some repos.

## 7.11.0

- Updated @sentry/nextjs from 8.5.0 to 8.18.0

## 7.10.2

- Add prop isDisabled for TenantSelectHeader
- Add validation allow for HNMenuItemt in data extraction

## 7.10.1

- Change redirect in useCheckRequiredInfo when user has wrong required info

## 7.10.0

- Add query param validation for data extraction

## 7.9.3

- Fix validations of required info in cookies for tenants without clients apis

## 7.9.2

- Added a selector on header menu
- Added fix to change styles in tenant selector when user scrolls and it is a mobile version

## 7.9.1

- Fixing message on expire session modal

## 7.9.0

- Remove Login to admin center with email

## 7.9.0-beta.3

- Add custom callback for successful refresh token

## 7.9.0-beta.2

- Fix validation for use login admincenter v2
- change validation of user agreements in portal app
- deprecated SessionTimer component

## 7.9.0-beta.1

- Add sso refresh token service
- Add login admin center v2 service
- Create session timer component version 2, with sso refresh token for use it in not productions environments
- Apply login admin center v2 for not productions environments in getUserData

## 7.9.0-beta.0

- Add get username fron sso token function
- Add validation of sso token in checkRequiredInfoInCookiesSSMiddleware
- Add custom validations in processLogin, and return data with no valid custom process login
- Add portal permission cookie
- Return has required info state in useCheckRequiredInfo
- Use local storage key for username in useMixpanelRegisterUtility

## 7.8.1

- Added a styling fix for the Autocomplete element, avoiding a strange behavior when hovering the element.

## 7.8.0

- Add data-testid prop to the InfiniteScrollSelect component
- add handler for close menu with scroll

## 7.7.1

- Fix custom font family in components

## 7.7.0

- Add option for custom theme to mui

## 7.6.0

- Fix Icons font with browser cache

## 7.5.0

- Add short logo to images of theme

## 7.4.0

- Migrated sentry to version 8.x

## 7.3.9

- Added an attribute for ProductByClient type to allows isComing Control

## 7.3.8

- Added word-break property to dialog content containers

## 7.3.7

- Added scrollable prop to SelectTenantHandler component to desable scrollable behaviour

### 7.3.6

- fixing bug in popover header menu : the menu moved when opening an accordion item in the menu, this happened because the items had a dynamic key that forced the components to be recreated

### 7.3.5

- Fix movement of HeaderMenuHN when close in scroll

### 7.3.4

- Downgrading ag-grid version range

### 7.3.3

- Add handler for close HeaderMenuHN when scroll page

### 7.3.2

- Using AgGridHN instead of AgGridHNResponsive in withToolPanelFilter for AgGridHNSideFilter

### 7.3.1

- Added AgGridTreeDataHn components

### 7.3.0

- Handler for disable redirection logout url
- Add removed code in useCheckRequiredInfo

### 7.2.2

- Remove action refresh token in useCheckRequieredInfo

### 7.2.1

- Fix conflicts with version in react types library with build

### 7.2.0

- Add custome link component for logo in bows header component

### 7.1.7

- Changed expired token session message

### 7.1.6

- Importing react-select-async-paginate dynamically

### 7.1.5

- Fixing export SentryContextProvider

### 7.1.4

- Restoring some Sentry files, to enable the Sentry Context Provider, to send the tenant info to the dashboard.

### 7.1.3

- Making some fixes on Ag-Grid Styling, to fix some broken styles in Concept Groups and Provider Groups with the new Ag-Grid Update.

### 7.1.2

- Replaced the previous logout logic, to placed it inside the useCheckRequiredInfo function, avoiding unexpected behaviors.

### 7.1.1

- Fix package-lock

### 7.1.0

- Add Handler for close HeaderMenuHN

### 7.0.0

- Updating MUI and Ag-Grid Dependencies
- Removing Sentry Dependencies.

### 6.21.0

- Add context to allow logout respect for apis available per app
- Add permission restriction in tenantMenu

### 6.20.0

- Added effect to change tenant name in tenantSelectHandler component

### 6.19.0

- Add Handler for HeaderMenuHN, and fix styles of BowsHeader for responsive

### 6.18.0

- Add Breakpoints values for MUI Theme, responsive app

### 6.17.0

- Add handlers to buttons events in session timer, and external trigger for show dialog

### 6.16.0

- Add onClick event handler to HeaderMenuHN component

### 6.15.0

- Change type of TFeatureRuleFunction return

### 6.14.0

- no retry fetch for get tenant info with error
- Remove cursor pointer to popover in HeaderMenuHN, and only pointer for button items

### 6.13.0

- Add custom styles for error page
- Add custom logout for unauthorized page
- Add GridNoRowsOverlay component for client ag grids
- Add SsoSessionTimer component to check SSO token
- Fix and export Portal Gallery components

### 6.12.1

- Add overflow wrap to async modals description.

### 6.11.0

- Add and export components for portal header

### 6.10.0

- Updated @sentry/nextjs from 7.99.0 to 7.101.0

### 6.9.0

- Add Bows Header

### 6.8.0

- Updated @sentry/nextjs from 7.95.0 to 7.99.0

### 6.7.2

- check tenant changed in useCheckRequiredInfo

### 6.7.1

- Remove cookies when change of tenant with tenant menu

### 6.7.0

- Change title prop for DialogHN component

### 6.6.0

- Adding Sentry context provider, useSentryRegister hook, and some config constants or functions

### 6.5.0

- Add cookie to manage facilities feature flag
- Add functions to get facilities feature from local storage and cookies

### 6.4.0

- Add cookie flag to know when user logout from other app
- Remove logout cookie when login
- Check logout cookie when user move between browser tabs

### 6.3.0

- Add handler for private products of analytics app in header menu

### 6.2.4

- Add function to get tags
- Add tags constants

### 6.2.3

- Add general icons for grid actions

### 6.2.2

- Add validation of scope for custome query in data extraction item menu

### 6.2.1

- unify admincenter urls in the context manager
- change header url for data extraction
- enable to add extra custom icons buttons to HN header

### 6.2.0

- Enable a customized function to appPermissions in ContextManager
- Fix checkpermissions function, that all scopes are fulfilled

### 6.1.4

- Exporting Microloading component

### 6.1.3

- Fix styles of select tenant component in header when change by scroll
- Change modules files by mui styled components in Header Menu
- Remove imports of files: HeaderHN.css, HeaderMenuHN.css, MainMenuHN.css and TitleBarHN.css

### 6.1.2

- Change validation for too long titles

### 6.1.1

- Fix redirection of agreements page

### 6.1.0

- Add user agreements verifitacion in proces login with redirection
- Change Content-Type in Admin Center API requests to application/json

### 6.0.4

- Fix arrows blur on chispContainer component

### 6.0.3

- Fix styles of client select when scroll event

### 6.0.2

- Fix Order Pagination to clients list in impersonation select

### 6.0.1

- Add Order to clients list in impersonation select
- Add filter by active attribute for client list

### 6.0.0

- Change api of Admin Center to v2 for getClients, loginAdmincenter and updateClient.
- Change tenants select for TenantMenuHN component
- for update lib in apps, check login page and remove import of TenantMenuHN.css
- Add and use endpoint for get my tenant from admin center api

### 5.2.0

- Add Internal Dashboards and KPIs Dashboard items to main menu
- Add envs for looker dashboard project url and validations of tenants for internal dashboards
- Add createCollection function to get all crud methods with the same base url and headers configuration
- Add IconButtonWrapper for icons in the action column of aggrid tables
- Bugfix, forward ref to IconButtonWrapper
- Adding Export Icon
- Adding style for tooltipe with right placement
- add KPI Big Query Dashboard to main menu

- Adding MixPanel context provider and useRegisterMixpanel hook
- Modify rediction logo and item menu Managing Tenant

### 5.1.2

- Arrow centered behind

### 5.1.1

- Added a new positive integer validation rule, but icluding the number zero.

### 5.1.0

- Enable children items to Header HN component

### 5.0.0

- Remove sizeColumnsToFit from useServerSideHandlerGrid
- Deprecated AgGridHNResponsive, now column fit handle with fix attribute

### 4.20.0

- Added Chips container with custom scroll

### 4.19.0

- Added Component for upload csv file to imports

### 4.18.0

- Added useFetchServerSidePageStart and useFetchPaginationSinceId

### 4.17.0

- Added new resellers themes

### 5.0.0.beta.0

- Aggrid upgrade to 30.1.0
- Api Response Types added for content and embedded response
- making getValueValidity a parameter in useFilterBoxCS hook

### 4.16.2

- Change color to Arrows icons, and error page button

### 4.16.1

- Change Evernorth reseller color

### 4.16.0

- Add get reseller for provider groups function
- Add Evernorth reseller in theme
- Doc page to new provider groups
- Adjust the size of Logo for header

### 4.15.1

- Fix IconButtonWrapper function to take className

### 4.15.0

- Changed redirection for providers and transformations on main menu

### 4.12.0

- fixing pipepline : adding jq

### 4.11.0

- adding shell script to autommatically tag new publish versions

### 4.10.0

- Decrease agrid table minheight from `400px` to `250px`
- Added missing elements such as the download Icon, and two small function for mandatory fields and USADormatDate to the library
- Validation only dev and local for new admin center and looker
- Remove validation only dev and local for looker
- fix base path url of dashboards api
- Remove validation only dev and local for new admin center
- Changed text field error undeline class
- add default forlder for init expanded in PortalGallerySearch
- Added return url to getResellerHNAppBaseUrl function
- Return setValue in useFilterBoxCS, for change value without trigger event

### 4.9.0

- Adding icon Analytics manager

### 4.8.0

- Adding floating close filter component for drawer filter

### 4.7.0

- adding floating filter Icon with badje wrapper

### 4.6.0

- Change Scope for dashboards API

### 4.5.1

- bug fix => aggrid tooltip wasn't showing correctly for row elements

### 4.5.0

- Updating tooltip font family

### 4.4.1

- Solving compilation error, witValueTooltip wasn't compiled right

### 4.4.0

- Adding aggrid Tooltip

### 4.3.1

- fix type for active queryparam in products service

### 4.3.0

- Add the url of gallery icons in cloudfront to ContextManager
- Improve refresh icons fonts when no found the icon

### 4.2.0

- Add icons handler for data discovery items in user menu

### 4.1.2

- Fix some styles of PortalGallerySelect component

### 4.1.1

- Fix some styles of PortalGallerySelect component

### 4.1.0

- Adding gallery components for handle cloudfront icons font
- PortalGalleryIcon, PortalGalleryCard, PortalGalleryFolderAccordion, PortalGallerySearch, PortalGallerySelect, PortalGalleryProvider

### 4.0.0

- Adding initial filter and sorting values for the module `useExternalAggridFilters`

### 4.0.0-beta

- Upgrading peerdependency aggrid version from v28 to v29
- Fix validation of tenant for internal dashboard
- fix --ag-row-border-width value for ag-grid styles
- fix pagination error with aggrid server side grids
- Improve external filters typescript to make them more flexible and make it work with arraysand object as values
- Adding typecript check command to rhe build script
- fixing chips MUI styles, it didn't showed the right styles for the outlined variant
- Export tab items interface of tabsHN component
- Remove internal tenants ids of contextManager
- Add read dashboard to permissions
- Add dashboard api to put products in user menu
- Add new attributes to product dashboard type
- Changes value prop variant in TabHN
- Change endpoint for get dashboards of product
- Add managing products option to super admin menu
- Add useExternalAggridFilters for handling external filters and external sorting in aggrid server side tables

### 3.3.0

- Delete HCO and HCP items from main menu
- Delete env variables related to datafactory project

### 3.1.1-beta

- Enable void appPermissions in checkPermissions
- Export TgetClients interface for use in other projects

### 3.1.0

- Enable individual importing of each header menu components

### 3.0.0

- Env variables are now handled with a singleton component call ContextManager, an example on how to use it can be found in the repository `health-nexus-concept-groups-ui`
- useTaskWatcher receives an adapter for transforming the fetch response, this make it more flexible, before that it was highly coupled with axios
- it was added a new react hook: `useFeatureValidator` this allows you to manage conditions for hidding or disabling ui elements in a more mantainable way
- Enum Module was added for commons keys of cookies and localstorage to avoid mispelling and bugs
- Reseller support was added, an example on how to use it can be found in the repository `health-nexus-concept-groups-ui`
- The react hook for managing server side request in aggrid was improved to be more flexible and work with any kind of pagination, the new component is the following `useGeneralFetchServerSide`
