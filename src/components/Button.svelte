<script>
  import { Link } from "svelte-navigator";
  export let path, name;
</script>

<Link to={path}><button style="width: 100%;">{name}</button></Link>
