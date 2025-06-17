<template>
    <div class="next-page">
        <div class="next-page-content">
            <a :href="href">{{ localizedNext }} - {{ title  }}
            <span style="margin-left: 8px;">
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NextPage',
    props: {
        href: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        locale: {
            type: String,
            default: 'zh'
        }
    },
    computed: {
        localizedNext() {
            switch (this.locale) {
                case 'en':
                    return 'Next';
                case 'zh':
                    return '下一页';
                default:
                    return 'Next';
            }
        }
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}
a:hover {
    text-decoration: none;
    cursor: pointer;
}

.next-page-content {
    padding: 1.5em;
} 
.next-page {
    border-radius: 10px;
    border: 2px solid #4c8160;
}
.next-page:hover {
    background-color: #4c8160;
    transition: background-color 0.1s ease-in-out;
}
.next-page:hover a {
    color: white;
    transition: color 0.1s ease-in-out;
}

</style>