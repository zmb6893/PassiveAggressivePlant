<page>
    <actionBar>
        <stackLayout orientation="horizontal">
            <image src="res://icon" width="40" height="40" verticalAlignment="center" />
            <label text="NativeScript" fontSize="24" verticalAlignment="center" />
        </stackLayout>
    </actionBar>
    <stackLayout backgroundColor="#3c495e">
        <dockLayout>
            <label text="left" height="70%" backgroundColor="#4383b8"/>
            <label text="right" height="70%" backgroundColor="#4383b8"/>
        </dockLayout>
        
        <label text="second" height="30%" backgroundColor="#286290"/>
    </stackLayout>
</page>

<script lang="ts">
    let message: string = "Blank Svelte Native App"
</script>

<style>
    .info .fas {
        color: #3A53FF;
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
