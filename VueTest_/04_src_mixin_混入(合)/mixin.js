export const mixin = {
    methods: {
        showName() {
            console.log('showName', this)
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊！')
    }
}
export const hunhe = {
    data() {
        return {
            x: 100,
            y: 200
        }
    }
}
