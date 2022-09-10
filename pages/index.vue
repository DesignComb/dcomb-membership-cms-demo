<template>
  <div>index</div>
</template>

<script>

export default {
  middleware({ app,route,redirect }) {
    let locale = app.i18n.locale === app.i18n.defaultLocale ? '' : '/' + app.i18n.locale;
    if (route.fullPath === locale + "/" || route.fullPath === locale ) {
      return redirect( locale + '/Home')
    }else{
      return redirect('/Home')
    }
  }
}
</script>

