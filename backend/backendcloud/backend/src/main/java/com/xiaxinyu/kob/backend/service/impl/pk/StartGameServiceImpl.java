package com.xiaxinyu.kob.backend.service.impl.pk;

import com.xiaxinyu.kob.backend.consumer.WebSocketServer;
import com.xiaxinyu.kob.backend.service.pk.StartGameService;
import org.springframework.stereotype.Service;

@Service
public class  StartGameServiceImpl implements StartGameService {
    @Override
    public String startGame(Integer aId,Integer aBotId,Integer bId,Integer bBotId) {
        WebSocketServer.startGame(aId,aBotId,bId,bBotId);
        return "start game success";
    }
}
