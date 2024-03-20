<script lang="ts">
    export let disabled: boolean;
    export let link: string
    export let text: string;
</script>

<body>
    <a href={link} disabled="{disabled}">
        {text}
    </a>
</body>