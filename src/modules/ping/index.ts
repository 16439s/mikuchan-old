import { bindThis } from '@/decorators.js';
import Module from '@/module.js';
import Message from '@/message.js';

export default class extends Module {
    public readonly name = 'ping';

    @bindThis
    public install() {
        return {
            mentionHook: this.mentionHook
        };
    }

    @bindThis
    private async mentionHook(msg: Message) {
        if (msg.text && msg.text.includes('ping')) {
            const startTime = process.hrtime();
            
            const endTime = process.hrtime(startTime);
            const latency = Math.round((endTime[0] * 1000) + (endTime[1] / 1000000)); // レイテンシーをミリ秒に変換

            msg.reply(`応答完了 レイテンシーは ${latency}ms でした。`);
            return true;
        } else {
            return false;
        }
    }
}
