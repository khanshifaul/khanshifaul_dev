import { ISession } from "~~/types/ISession"

export async function registerWithEmail(username: string, name: string, email: string, password: string) {
    try {
        const res = await $fetch<ISession>('api/auth/register', {
            method: 'POST',
            body: { username, name, email, password }
        })
        if (res) {
            useState('user').value = res
            await useRouter().push('/admin')
        }
    } catch (error: any) {
        console.log('error: ' + error.toString())
    }
}

