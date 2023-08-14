package com.huang.lightweight.server.registry.service.impl;

import com.huang.lightweight.common.exception.LightweightException;
import com.huang.lightweight.common.pojo.instance.Instance;
import com.huang.lightweight.common.pojo.InstanceWrapper;
import com.huang.lightweight.common.task.TaskExecuteWorker;
import com.huang.lightweight.server.registry.cluster.beat.InstanceHeartbeat;
import com.huang.lightweight.server.registry.cluster.distributed.DistributedManager;
import com.huang.lightweight.server.registry.cluster.distributed.DistributedMode;
import com.huang.lightweight.server.registry.cluster.distributed.distro.DistroProtocol;
import com.huang.lightweight.server.registry.service.InstanceService;
import com.huang.lightweight.server.registry.util.ServiceManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * RegistryServiceImpl
 *
 * @Author lightweight
 * @Date 2023/5/23 11:28
 */
@Service
public class InstanceServiceImpl implements InstanceService {

    private static final Logger logger = LoggerFactory.getLogger(InstanceServiceImpl.class);

    @Autowired
    private ServiceManager serviceManager;

    @Autowired
    private InstanceHeartbeat scheduledThreadPool;

    @Autowired
    private DistributedManager distributedManager;

    @Autowired
    private DistroProtocol distroProtocol;

    /**
     * regitry to server
     *
     * @param instance instance
     * @return true success false fail
     */
    @Override
    public void registerInstance(Instance instance) throws LightweightException {
        instance.setInstanceId(UUID.randomUUID().toString());
        serviceManager.put(instance.getServiceName(), instance);
        // 心跳检查
        scheduledThreadPool.execute(instance, serviceManager);
        if(distributedManager.getMode() == DistributedMode.AP){
            distroProtocol.sendRegisterInstance(instance);
        }
    }

    /**
     * update to server
     *
     * @param instance instance
     */
    @Override
    public void updateInstance(Instance instance) throws Exception {
        serviceManager.update(instance.getServiceName(), instance);
    }

    /**
     * Returns a list of InstanceWrapper objects containing instances from the cache.
     *
     * @return A list of InstanceWrapper objects
     */
    public List<InstanceWrapper> listInstances() {
        return serviceManager.listInstanceWrapper();
    }

    /**
     * 接收心跳检测
     */
    @Override
    public void beat(Instance instance) throws LightweightException {
        instance.setLastBeat(System.currentTimeMillis());
        serviceManager.update(instance.getServiceName(), instance);
    }

}
